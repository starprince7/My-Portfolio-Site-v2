// next.config.js

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const path = require("path");

const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
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
  
  // Experimental features for better serverless compatibility
  experimental: {
    // Exclude problematic files from tracing for serverless functions
    outputFileTracingExcludes: {
      '/api/html-to-pdf': [
        './node_modules/@swc/core-linux-x64-gnu',
        './node_modules/@sparticuz/chromium/**/*',
        './node_modules/puppeteer-core/**/*',
      ],
    },
  },
  
  // Webpack configuration for puppeteer
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (isServer) {
      // Exclude puppeteer from client-side bundle
      config.externals = [...(config.externals || []), 'puppeteer-core', '@sparticuz/chromium'];
      
      // Handle puppeteer's dynamic imports
      config.resolve.alias = {
        ...config.resolve.alias,
        'puppeteer-core$': 'puppeteer-core/lib/cjs/puppeteer/puppeteer-core.js',
      };
    }
    
    // Ignore puppeteer warnings
    config.ignoreWarnings = [
      { module: /node_modules\/puppeteer-core/ },
      { module: /node_modules\/@sparticuz\/chromium/ },
    ];
    
    return config;
  },
};

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig);