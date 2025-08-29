const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");

// Ensure Node.js runtime and allow larger payloads for HTML input
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "2mb",
    },
    responseLimit: false,
  },
};

// CORS helpers
const ORIGIN_ALLOWLIST = (process.env.HTML_TO_PDF_CORS_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

function resolveCorsOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return null;
  if (ORIGIN_ALLOWLIST.includes('*')) return '*';
  return ORIGIN_ALLOWLIST.includes(origin) ? origin : null;
}

export default async function handler(req, res) {
  // CORS handling
  const corsOrigin = resolveCorsOrigin(req);
  res.setHeader('Vary', 'Origin');
  
  if (req.method === 'OPTIONS') {
    if (corsOrigin) {
      res.setHeader('Access-Control-Allow-Origin', corsOrigin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    const requested = req.headers['access-control-request-headers'];
    res.setHeader(
      'Access-Control-Allow-Headers',
      requested && typeof requested === 'string'
        ? requested
        : 'Content-Type, Authorization'
    );
    res.setHeader('Access-Control-Max-Age', '86400');
    return res.status(204).end();
  }
  
  if (corsOrigin) {
    res.setHeader('Access-Control-Allow-Origin', corsOrigin);
    res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Parse request body
  let payload = req.body || {};
  if (typeof payload === "string") {
    try {
      payload = JSON.parse(payload || "{}");
    } catch {
      return res.status(400).json({ error: "Invalid JSON body." });
    }
  }
  
  const { html, url, fileName, pdfOptions, download } = payload;

  if (!html && !url) {
    return res.status(400).json({
      error: "Missing required input: provide either `html` or `url`.",
    });
  }

  let browser;
  try {
    // Launch browser with @sparticuz/chromium configuration
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();
    
    // Set timeouts
    const timeout = Math.min(
      Math.max(
        parseInt(process.env.HTML_TO_PDF_TIMEOUT_MS || "30000", 10) || 30000,
        10000
      ),
      60000 // Reduced max timeout for serverless
    );
    page.setDefaultNavigationTimeout(timeout);
    page.setDefaultTimeout(timeout);

    // Load content
    if (url) {
      let parsed;
      try {
        parsed = new URL(url);
      } catch {
        return res.status(400).json({ error: "Invalid `url` provided." });
      }
      if (!["http:", "https:"].includes(parsed.protocol)) {
        return res
          .status(400)
          .json({ error: "Only http/https URLs are allowed." });
      }
      await page.goto(parsed.toString(), { 
        waitUntil: "networkidle2", // Changed from networkidle0 for better performance
        timeout 
      });
    } else if (html) {
      // Inject base URL for relative resources
      const baseUrl = (req.headers.origin || req.headers.referer || "http://localhost")
        .replace(/\/$/, "");
      
      const hasHead = /<head[\s>]/i.test(html);
      const hasBase = /<base\s+/i.test(html);
      
      let injectedHtml = html;
      if (!hasBase) {
        if (hasHead) {
          injectedHtml = html.replace(
            /<head(\s*>)/i, 
            `<head$1\n<base href="${baseUrl}/">`
          );
        } else {
          injectedHtml = `<head><base href="${baseUrl}/"></head>${html}`;
        }
      }

      await page.setContent(injectedHtml, { 
        waitUntil: "networkidle2",
        timeout 
      });
    }

    // PDF generation options
    const defaultPdfOptions = {
      format: "A4",
      printBackground: true,
      margin: { 
        top: "0.5in", 
        right: "0.5in", 
        bottom: "0.5in", 
        left: "0.5in" 
      },
      preferCSSPageSize: false,
    };

    const options = { ...defaultPdfOptions, ...(pdfOptions || {}) };
    const pdfBuffer = await page.pdf(options);

    // Set response headers
    const safeName = (fileName || "document").replace(/[^a-z0-9_\-\.]/gi, "_");
    const disposition = download === false ? "inline" : "attachment";
    
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Length", pdfBuffer.length);
    res.setHeader(
      "Content-Disposition",
      `${disposition}; filename="${safeName}.pdf"`
    );

    // Send PDF
    return res.status(200).send(pdfBuffer);

  } catch (err) {
    console.error("[html-to-pdf] Error:", err);
    
    // More specific error messages for debugging
    let errorMessage = "Failed to generate PDF";
    if (err.message.includes("Navigation timeout")) {
      errorMessage = "Page load timeout - try reducing content complexity";
    } else if (err.message.includes("net::ERR_")) {
      errorMessage = "Network error - check URL accessibility";
    } else if (err.message.includes("Protocol error")) {
      errorMessage = "Browser protocol error - possible memory limit exceeded";
    }
    
    return res.status(500).json({ 
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
    
  } finally {
    if (browser) {
      try {
        await browser.close();
      } catch (closeError) {
        console.error("Error closing browser:", closeError);
      }
    }
  }
}