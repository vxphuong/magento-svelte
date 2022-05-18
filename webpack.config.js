const { InjectManifest } = require("workbox-webpack-plugin");
const webpack = require('webpack')

  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new InjectManifest({
      swSrc: "./service-worker.js",
    })
  ]