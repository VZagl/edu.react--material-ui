const path = require("path");

console.log("## __dirname =", __dirname);

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      src: resolvePath("src"),
      assets: resolvePath("src/assets"),
      img: resolvePath("src/assets/img"),
      components: resolvePath("src/components"),
      types: resolvePath("src/types"),
      // app: resolvePath("src/app"),
      // widgets: resolvePath("src/widgets"),
      // entities: resolvePath("src/entities"),
      pages: resolvePath("src/pages"),
      features: resolvePath("src/features"),
    },
  },
  typescript: {
    enableTypeChecking: true /* (default value) */,
  },
};
