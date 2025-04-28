const nextConfig = {
  // reactStrictMode: true, // Cấu hình này nên nằm ở cấp cao nhất, ngoài hàm webpack
  webpack: (config) => {
    // config.cache = false; // Tắt cache của Webpack
    return config;
  },
};

module.exports = nextConfig;
