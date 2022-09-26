const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
    }), new MiniCssExtractPlugin({filename: "bootsCss.[contenthash].css"})],
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",  
        },
        {
        test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "images"
              }
            }
          ]
        },
        {
          test: /\.(scss)$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: () => [
                    require('autoprefixer')
                  ]
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    }
}