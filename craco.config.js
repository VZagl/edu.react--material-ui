const path = require("path");

console.log("## __dirname =", __dirname);

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "~": resolvePath("src"),
      // src: resolvePath("src"),
      // "~assets": resolvePath("src/assets"),
      // img: resolvePath("src/assets/img"),
      // styles: resolvePath("src/assets/styles"),
      // shared: resolvePath("src/shared"),
      // pages: resolvePath("src/pages"),
      // features: resolvePath("src/features"),
      // components: resolvePath("src/components"),
      // layouts: resolvePath("src/layouts"),
      // context: resolvePath("src/context"),
    },
  },
};
