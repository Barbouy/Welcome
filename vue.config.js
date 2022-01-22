/**
 * @type {import('@vue/cli-service').ProjectOptions}
 * 
 */
const PurgecssPlugin = require("purgecss-webpack-plugin")
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
          new PurgecssPlugin({ whitelistPatterns: [/enter$/, /enter-to$/, /leave$/, /leave-to$/, /leave-active$/, /enter-active$/, /move$/] }),
        ],
      }
    }
    return additionalConfig
  },
}