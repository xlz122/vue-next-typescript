const path = require('path');

function resolve(dir) {
  // 设置文件路径别名方法
  return path.join(__dirname, dir);
}

// 配置不进行webpack打包的文件
// const externals = {
//   'vue': 'Vue',
//   'vue-router': 'VueRouter',
//   'vuex': 'Vuex',
//   'axios': 'axios'
//   // 'lodash':'_',
//   // 'echarts': 'echarts',
//   // 'nprogress': 'NProgress',
// }
// 使用cdn引入
// const cdn = {
//   css: [],
//   js: [
//     'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
//     'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
//     'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
//     'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
//   ]
// }

// gzip压缩
// npm install compression-webpack-plugin --save-dev
// yarn add compression-webpack-plugin --save-dev
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 可加入需要的其他文件类型，比如json
// 图片不要压缩，体积会比原来还大
const productionGzipExtensions = ['js', 'css', 'json'];

module.exports = {
  // 公共路径
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist', // 打包(build)生成文件目录 默认dist
  assetsDir: '', // 默认不写或空，css js img文件夹都将放置在根目录下，所有的静态文件放置路径
  indexPath: 'index.html', // 指定打包生成的index.html放置的路径 例：xlz/index.html，index.html将被放置在dist/xlz/index.html
  lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  productionSourceMap: false, // 设置为true的时候,打包完成后生成一些js.map文件,如果有报错,可以精确的输出哪一个文件、哪一行报错
  css: {
    sourceMap: false, // 设置为true的时候 打包完成后会生成一些css.map文件,如果有报错,可以精确的输出哪一个文件、哪一行报错
    extract: true, // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    requireModuleExtension: true, // 开启module <style module></style>
    loaderOptions: {
      // 给 stylus-loader 传递选项
      stylus: {
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        // import: '~@/assets/styles/varibles.styl',
        // globalVars: {
        //   primary: '#fff'
        // }
      },
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        // prependData: `@import "~@/variables.sass"`
      },
      // 给 less-loader 传递选项
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: 'true; @import "@/assets/common.less";'
          }
        }
      }
    }
  },
  devServer: {
    open: true, // 启动后是否自动打开浏览器
    port: 8010, // 启动服务端口号
    // index: '',   //启动项目后，默认进入的页面地址
    proxy: {
      // 使用对象的方式设置多个代理
      api: {
        target: 'http://localhost:3010', // 替换成需要请求的接口地址
        ws: true, // 允许跨域
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/' // 替换target中的请求地址 请求地址直接使用 /login的形式
        }
      }
    }
  },
  configureWebpack: (config) => {
    // 必须添加环境判断代码，因为development(开发)环境下config.optimization是undefined
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      // 去掉所有console.log()
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;

      return {
        // 配置不进行webpack打包的文件
        // externals: externals,
        // 配置gzip压缩
        plugins: [
          new CompressionWebpackPlugin({
            // filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
              '\\.(' + productionGzipExtensions.join('|') + ')$'
            ),
            threshold: 10240, //对超过10k的数据进行压缩
            minRatio: 0.6 // 压缩比例，值为0 ~ 1
          })
        ]
      };
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: (config) => {
    // 设置文件路径别名(需要配合顶部的方法)
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
      .set('@views', resolve('src/views'));
    // 配置cdn引入
    config.plugin('html').tap((args) => {
      // 配置index.html title
      args[0].title = 'vue-next-ts';

      // if (process.env.NODE_ENV === 'production') {
      //   args[0].cdn = cdn
      // }
      return args;
    });
    // 当基于已有的后端使用 Vue CLI 时，你可能不需要生成 index.html
    // config.plugins.delete('html');
    // 移除 prefetch 插件
    config.plugins.delete('prefetch');
    // 移除 preload 插件
    config.plugins.delete('preload');
  },
  pluginOptions: {
    // 第三方插件配置
  },
  // 去掉文件名中的 hash
  filenameHashing: false
};
