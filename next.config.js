// next.config.js for Next.js 14+

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const path = require("path");

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: false,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  
  // Webpack configuration for puppeteer in Next.js 14+
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Exclude puppeteer from client-side bundle
      config.externals = [...(config.externals || []), 'puppeteer-core', '@sparticuz/chromium'];
    }
    return config;
  },
};

module.exports = withMDX(nextConfig);