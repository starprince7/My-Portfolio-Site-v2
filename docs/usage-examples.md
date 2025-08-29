# Usage Examples

## Fetch from Browser (HTML input)
```js
async function generateFromHtml(html) {
  const res = await fetch('/api/html-to-pdf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ html, fileName: 'from-html', download: true })
  });
  if (!res.ok) throw new Error('PDF generation failed');
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'from-html.pdf';
  a.click();
  URL.revokeObjectURL(url);
}
```

## Fetch from Browser (URL input)
```js
async function generateFromUrl(targetUrl) {
  const res = await fetch('/api/html-to-pdf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: targetUrl, fileName: 'from-url', download: false })
  });
  if (!res.ok) throw new Error('PDF generation failed');
  const blob = await res.blob();
  // Open inline in a new tab
  window.open(URL.createObjectURL(blob), '_blank');
}
```

## Node/Server Example
```js
import fetch from 'node-fetch';

async function savePdf() {
  const res = await fetch('https://yourdomain.com/api/html-to-pdf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ html: '<h1>Hello</h1>', fileName: 'node-doc' })
  });
  if (!res.ok) throw new Error('PDF generation failed');
  const buffer = await res.arrayBuffer();
  require('fs').writeFileSync('node-doc.pdf', Buffer.from(buffer));
}
```
