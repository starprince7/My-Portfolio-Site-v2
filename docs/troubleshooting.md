# Troubleshooting

## Common Issues
- 400 Invalid JSON: Ensure the request body is valid JSON if sent as a string
- 400 Missing Input: Provide either `html` or `url`
- 400 Invalid URL: Only `http`/`https` URLs are allowed
- 405 Method Not Allowed: The route only supports `POST` and `OPTIONS`
- CORS blocked: Ensure `HTML_TO_PDF_CORS_ORIGINS` includes the frontend origin

## Puppeteer & Chromium
- Set `PUPPETEER_EXECUTABLE_PATH` to an installed Chrome/Chromium if local launch fails
- On serverless platforms, `@sparticuz/chromium` provides the binary path via `chromium.executablePath()`
- Increase `HTML_TO_PDF_TIMEOUT_MS` for slow pages or heavy assets

## Assets in HTML string not loading
- The handler injects a `<base>` tag if absent; ensure `req.headers.origin` is correct when calling the API cross-origin
- Use absolute URLs in your HTML when possible for CSS/JS/images

## Large PDFs or timeouts
- Consider reducing images or turning off heavy animations
- Increase timeout env var, up to the enforced 180s cap

## ESM vs CJS
- If you get module errors, adjust the imports in `src/pages/api/html-to-pdf.js` to match your project module system (ESM `import` or CJS `require`)
