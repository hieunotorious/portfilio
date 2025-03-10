import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.duelallday.com',
        pathname: '/media/**',
      },
    ],
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
