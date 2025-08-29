# Setup

## Dependencies
Install the required packages:

```bash
npm install puppeteer-core @sparticuz/chromium
```

## Environment Variables
Create/update `.env.local` (local dev) and production envs:

```
# Comma-separated allowlist of origins for CORS
HTML_TO_PDF_CORS_ORIGINS=https://yourapp.com,https://admin.yourapp.com

# Optional: Increase or decrease timeouts (10s–180s enforced)
HTML_TO_PDF_TIMEOUT_MS=60000

# Optional: Use a local Chrome/Chromium binary instead of the serverless one
PUPPETEER_EXECUTABLE_PATH=/Applications/Google Chrome.app/Contents/MacOS/Google Chrome
```

## Next.js Runtime
- The route is located at `src/pages/api/html-to-pdf.js`
- Body parser limit increased to `2mb` and `responseLimit` disabled for PDF streaming

## Notes on ESM vs CJS
- Next.js API routes can use ESM `import` or CJS `require` depending on project setup
- If you see module errors, switch to the other style consistently in the route file
