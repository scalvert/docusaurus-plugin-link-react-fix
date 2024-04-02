const path = require("path");
const findUp = require("find-up");

module.exports = function (context, options) {
  return {
    name: "link-react-fix",
    configureWebpack(config, isServer, utils) {
      let parentProjectDir = findUp.sync("docusaurus.config.json", {
        cwd: __dirname,
      });

      return {
        resolve: {
          alias: {
            react: path.resolve(parentProjectDir, "./node_modules/react"),
            "react-dom": path.resolve(
              parentProjectDir,
              ".node_modules/react-dom",
            ),
          },
        },
      };
    },
  };
};
