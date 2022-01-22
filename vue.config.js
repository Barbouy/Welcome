/**
 * @type {import('@vue/cli-service').ProjectOptions}
 * 
 */
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
  css: { loaderOptions: { scss: { additionalData: "@import \"~@/styles/colors.scss\";" } } }
}