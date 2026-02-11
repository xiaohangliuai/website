/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports if deploying to GitHub Pages
  // output: 'export',
  
  // Configure image optimization
  images: {
    unoptimized: true, // Set to true if using static export
  },
  
  // Disable strict mode to prevent double-rendering in development
  reactStrictMode: false,
  
  // Configure base path if deploying to a subdirectory
  // basePath: '/your-repo-name',
}

module.exports = nextConfig
