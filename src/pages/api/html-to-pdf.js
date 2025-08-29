// import puppeteer from 'puppeteer-core';
// import chromium from '@sparticuz/chromium';
const puppeteer = require("puppeteer-core");
const chromium = require("chrome-aws-lambda");

// Ensure Node.js runtime and allow larger payloads for HTML input
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "2mb",
    },
    responseLimit: false,
  },
};

// Utility: resolve an executablePath that works locally and on serverless
async function getExecutablePath() {
  // If a custom path is provided (e.g., local Chrome), prefer it
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    return process.env.PUPPETEER_EXECUTABLE_PATH;
  }
  // Fallback to @sparticuz/chromium's helper (works on Vercel/Netlify/etc.)
  return await chromium.executablePath();
}

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
  // CORS
  const corsOrigin = resolveCorsOrigin(req);
  res.setHeader('Vary', 'Origin');
  if (req.method === 'OPTIONS') {
    if (corsOrigin) {
      res.setHeader('Access-Control-Allow-Origin', corsOrigin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    // Echo requested headers or fall back to common defaults
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
    // Expose header so browsers can read filename
    res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');
  }

  if (req.method !== "POST" && req.method !== "OPTIONS") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

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
    const executablePath = await getExecutablePath();
    const isHeadless =
      chromium.headless !== undefined ? chromium.headless : "new";

    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: isHeadless,
      ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();
    const timeout = Math.min(
      Math.max(
        parseInt(process.env.HTML_TO_PDF_TIMEOUT_MS || "60000", 10) || 60000,
        10000
      ),
      180000
    );
    page.setDefaultNavigationTimeout(timeout);
    page.setDefaultTimeout(timeout);

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
      await page.goto(parsed.toString(), { waitUntil: "networkidle0" });
    } else if (html) {
      const baseUrl = (req.headers.origin || "http://localhost").replace(
        /\/$/,
        ""
      );
      const hasHead = /<head[\s>]/i.test(html);
      const hasBase = /<base\s+/i.test(html);
      const injectedHtml = hasBase
        ? html
        : hasHead
        ? html.replace(/<head(\s*>)/i, `<head$1<base href="${baseUrl}/">`)
        : `<head><base href="${baseUrl}/"></head>` + html;

      await page.setContent(injectedHtml, { waitUntil: "networkidle0" });
    }

    const defaultPdfOptions = {
      format: "A4",
      printBackground: true,
      margin: { top: "0.5in", right: "0.5in", bottom: "0.5in", left: "0.5in" },
      preferCSSPageSize: false,
    };

    const options = { ...defaultPdfOptions, ...(pdfOptions || {}) };
    const pdfBuffer = await page.pdf(options);

    const safeName = (fileName || "document").replace(/[^a-z0-9_\-\.]/gi, "_");
    const disposition = download === false ? "inline" : "attachment";
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `${disposition}; filename="${safeName}.pdf"`
    );

    // Stream the buffer
    res.status(200).send(Buffer.from(pdfBuffer));
  } catch (err) {
    console.error("[html-to-pdf] Error:", err);
    return res.status(500).json({ error: "Failed to generate PDF" });
  } finally {
    if (browser) {
      try {
        await browser.close();
      } catch (_) {}
    }
  }
}
