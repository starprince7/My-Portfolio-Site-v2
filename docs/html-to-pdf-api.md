# HTML to PDF API

Path: `src/pages/api/html-to-pdf.js`

This API converts either an HTML string or a URL into a PDF using `puppeteer-core` with the serverless-compatible `@sparticuz/chromium`.

## Features
- POST-only, with robust method validation
- Accepts either `html` or `url`
- Serverless-friendly Chromium launch (works locally and on Vercel/Netlify)
- Configurable timeouts via `HTML_TO_PDF_TIMEOUT_MS`
- Sensible PDF defaults (A4, margins, print background)
- Override PDF options via `pdfOptions`
- Streams `application/pdf` with `Content-Disposition` (filename)
- CORS allowlist support and preflight handling

## Request Body (POST)
Either provide HTML:
```json
{
  "html": "<html><head><title>Doc</title></head><body><h1>Hello</h1></body></html>",
  "fileName": "my-document",
  "download": true,
  "pdfOptions": {
    "margin": { "top": "0.5in", "right": "0.5in", "bottom": "0.5in", "left": "0.5in" },
    "format": "A4",
    "printBackground": true
  }
}
```

Or a URL:
```json
{
  "url": "https://example.com",
  "fileName": "example",
  "download": false
}
```

## Response
- Content-Type: `application/pdf`
- Content-Disposition: `attachment; filename="<fileName>.pdf"` (or `inline` when `download: false`)

## Validation & Safety
- Rejects non-POST with 405
- Ensures one of `html` or `url` is present (400)
- Validates URL protocol is `http` or `https` (400)
- Safely parses string bodies as JSON (400 on parse error)
- Injects a `<base>` tag into raw HTML when absent to correctly resolve relative assets

## PDF Options (subset of Puppeteer)
- `format` (e.g., A4, Letter)
- `margin` (top/right/bottom/left)
- `printBackground`
- `preferCSSPageSize`

See Puppeteer `page.pdf()` docs for the full list.
