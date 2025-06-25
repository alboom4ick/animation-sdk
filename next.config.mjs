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
};

export default nextConfig;
