// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/AllItems',
        permanent: true,  // This tells Next.js to always redirect
      },
    ];
  },
};
