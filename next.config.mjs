/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      // beforeFiles runs before static file resolution and before app routes,
      // so `/` serves public/index.html instead of the fallback app/page.tsx.
      beforeFiles: [
        { source: '/', destination: '/index.html' },
        { source: '/tools', destination: '/tools.html' },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
