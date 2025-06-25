/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/meet/animation-next-js',
  distDir: '../dist/animation-next-js',
  output: 'export',
  // Ensure CSS is handled properly
  optimizeFonts: false,
  images: {
    unoptimized: true,
  },
  // Add asset prefix to match basePath
  assetPrefix: '/meet/animation-next-js',
  // Ensure trailing slashes are handled consistently
  trailingSlash: true,
};

export default nextConfig;
