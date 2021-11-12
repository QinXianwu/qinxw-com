module.exports = {
  // 项目部署的基础路径
  publicPath: "/" /*这个是我存放在github在线预览的Reader项目*/,
  // 将构建好的文件输出到哪里
  outputDir: "dist",

  // 放置静态资源的地方
  assetsDir: "assets",

  // 用于多页配置，默认是 undefined
  pages: {
    index: {
      // 入口文件
      entry: "src/main.js" /*这个是根入口文件*/,
      // 模板文件
      template: "public/index.html",
      // 输出文件
      filename: "index.html",
      // 页面title
      title: "qinxw-com",
    },
    // 简写格式
    // 模板文件默认是 `public/subpage.html`
    // 如果不存在，就是 `public/index.html`.
    // 输出文件默认是 `subpage.html`.
    subpage: "src/main.js" /*注意这个是*/,
  },

  // 是否为生产环境构建生成 source map（浏览器显示打印的位置）
  productionSourceMap: false,

  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: false, // 与css样式热部署不兼容

    // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {},

    // 为所有的 CSS 及其预处理文件开启 CSS Modules(vue3-Modules已被弃用，使用requireModuleExtension)。
    // 这个选项不会影响 `*.vue` 文件。
    requireModuleExtension: false,
  },

  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  parallel: require("os").cpus().length > 1,

  // PWA 插件的选项。
  // 查阅 https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-pwa
  pwa: {},

  // 配置 webpack-dev-server 行为。
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
    hot: true,
    proxy: {
      "/muxiaoguo": {
        target: "https://api.muxiaoguo.cn",
        secure: false,
        changeOrigin: true,
        pathRewrite: {},
      },
    },
    before: (app) => {
      console.log(app);
    },
  },
  lintOnSave: false,

  // 三方插件的选项
  pluginOptions: {
    // ...
  },
};
