/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      { source: '/about.php', destination: '/#about', permanent: true },
      { source: '/why-choose-us.php', destination: '/#why-choose-us', permanent: true },
      { source: '/services.php', destination: '/#services', permanent: true },
      { source: '/career.php', destination: '/#careers', permanent: true },
      { source: '/cyber-essentials.php', destination: '/certification/cyber-essentials', permanent: true },
      { source: '/enquiry.php', destination: '/contact/enquiry', permanent: true },
      { source: '/iso-42001.php', destination: '/certification/iso-42001', permanent: true },
    ];
  },
};

module.exports = nextConfig;
