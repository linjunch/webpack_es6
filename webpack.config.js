const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development', // 开发环境中 js不会压缩
  // mode: "production", // 生产环境中 js会被压缩
  entry: ['./src/main.js', './public/index.html'],
  devtool: 'inline-source-map',
  output: {
    filename: 'js/main.[contenehash:10].js',
    path: resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 7777,
    open: true,
    hot: true, // 开启HMR
    clientLogLevel: 'none', // 服务器开启日志
    quiet: true, // 除了基本的启动信息外，其他内容不显示
    overlay: false, // 出错不会全屏提示
    proxy: {
      '/api': {
        //这里最好有一个 /
        target: 'http://www.liulongbin.top:3005', // 后台接口域名
        ws: true, //如果要代理 websockets，配置这个参数
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        // pathRewrite: {
        //   '^/api': '',
        // },
      },
    },
  },
  resolve: {
    // extensions: [".js", ".jsx", ".json", ".less", ".css", ".html"],
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      // 样式loader
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            // 单独取出css文件配置 配合plugin使用
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 修改样式文件url的错误
              publicPath: '../',
            },
          },
          'css-loader',
          // 样式兼容性处理
          // 需要在package.json定义browserslist
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [require('postcss-preset-env')()],
            },
          },
          'less-loader',
        ],
      },
      // 图片-url loader
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
        options: {
          // 图片小于100Kb，会被base64处理，
          // 优点： 减少请求数量（减轻服务器压力）
          // 缺点： 图片体积会变大
          limit: 100 * 1024,
          esModule: false,
          name: '[hash:10].[ext]',
          outputPath: 'img',
        },
      },
      // html-url loader
      {
        test: /\.html$/,
        loader: 'html-loader',
        // options: {
        //   attrs: [":data-src"]
        // }
      },
      // 图标文字loader
      {
        test: /\.(eot|svg|ttf|woff)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'fonts',
        },
      },
      // bable-loader
      // js 兼容性处理 babel-loader @babel/core
      // 1.基本兼容性处理 @babel/preset-env
      // 问题：只能转换基础语法，高级的promise不能转换
      // 2.全部js兼容性处理，在使用高级语法的js文件import 'babel/polyfill'
      // 问题：只需要解决部分兼容性问题，却将所有兼容性代码引入，导入了额外的不必要代码，文件过大
      // 3.按需加载：core-js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: {
                  version: 3,
                },
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17',
                },
              },
            ],
          ],
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [
    // 打包会生成以template模板的html文件
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // 压缩处理
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true,
      },
    }),
    // 将css单独打包
    new MiniCssExtractPlugin({
      filename: 'css/index.[contenehash:10].css',
    }),
    // 压缩css插件
    new OptimizeCssAssetsWebpackPlugin(),
  ],
};
