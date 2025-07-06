import type { NextConfig } from 'next';


const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

const nextConfig: NextConfig = withPWA({
  /* config options here */
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
});


export default nextConfig;
