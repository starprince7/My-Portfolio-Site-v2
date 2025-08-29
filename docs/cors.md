# CORS Configuration

The API supports cross-origin requests via an allowlist configured with an environment variable.

## Environment Variable
- `HTML_TO_PDF_CORS_ORIGINS`: Comma-separated list of allowed origins.
  - Example: `https://yourapp.com,https://admin.yourapp.com`
  - Use `*` to allow any origin (only if you understand the risk).

## Behavior
- Responds to `OPTIONS` preflight with:
  - `Access-Control-Allow-Methods: POST, OPTIONS`
  - `Access-Control-Allow-Headers: Content-Type`
  - `Access-Control-Max-Age: 86400`
- Sets `Access-Control-Allow-Origin` if the request Origin is allowed
- Sets `Access-Control-Expose-Headers: Content-Disposition` so the browser can read the filename
- Adds `Vary: Origin` for proper caching behavior

## Credentials (optional)
If you need cross-site cookies or Authorization headers:
- Add `Access-Control-Allow-Credentials: true` to responses
- Ensure `Access-Control-Allow-Origin` is NOT `*` but a specific origin
- Frontend must use `fetch(url, { credentials: 'include' })`

Update the handler accordingly if credentials are required.
