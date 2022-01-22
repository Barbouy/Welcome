/**
 * @type {import('@vue/cli-service').ProjectOptions}
 * 
 */
const PurgecssPlugin = require("purgecss-webpack-plugin")
const glob = require("glob-all")
const path = require("path")
module.exports = {
  // ignore Stencil web components
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
        //   isCustomElement: tag => tag.startsWith("icon-")
        }
        return options
      })
  },
  pages: { index: { entry: "src/main.js" } },
  css: { loaderOptions: { scss: { additionalData: "@import \"~@/styles/colors.scss\";" } } },
  configureWebpack() {
    // Additional config to be merged
    let additionalConfig = {}
    // Production config
    if (process.env.NODE_ENV === "production") {
      additionalConfig = {
        plugins: [
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, "./public/index.html"),
              path.join(__dirname, "./src/**/*.vue"),
              path.join(__dirname, "./src/**/*.html"),
            ]),
          }),
        ],
      }
    }
    return additionalConfig
  },
}