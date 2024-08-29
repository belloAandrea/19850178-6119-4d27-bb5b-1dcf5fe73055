module.exports = {
  images: {
    domains: ['example.com'], // Add your image domains
  },
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },
};