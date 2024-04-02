const path = require("path");
const findUp = require("find-up");

module.exports = function (context, options) {
  return {
    name: "link-react-fix",
    configureWebpack(config, isServer, utils) {
      let docusaurusConfigPath = findUp.sync("docusaurus.config.js", {
        cwd: __dirname,
      });

      let projectDir = path.dirname(docusaurusConfigPath);

      return {
        resolve: {
          alias: {
            react: path.resolve(projectDir, "./node_modules/react"),
            "react-dom": path.resolve(projectDir, "./node_modules/react-dom"),
          },
        },
      };
    },
  };
};
