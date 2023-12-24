const path = require("path");

module.exports = function override(config) {
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  });
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@app": path.resolve(__dirname, "src"),
    },
  };

  return config;
};
