const path = require("path");

module.exports = function (context, options) {
  return {
    name: "link-react-fix",
    configureWebpack(config, isServer, utils) {
      const { getCacheLoader } = utils;

      return {
        resolve: {
          alias: {
            react: path.resolve(__dirname, "./node_modules/react"),
            "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
          },
        },
      };
    },
  };
};
