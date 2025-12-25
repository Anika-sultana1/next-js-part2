import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        // port: '',
        pathname: '/images/media/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me', // নতুন ডোমেইন যোগ করা হলো
        pathname: '/api/portraits/**',
      },
    ],
  },


};

export default nextConfig;
