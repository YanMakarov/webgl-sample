const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.entry = `${path.resolve(__dirname)}/src/`;
      return webpackConfig;
    },
  },
};
