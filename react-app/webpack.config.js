var path = require('path');

var SRC_DIR = path.resolve(__dirname, 'src');
var DIST_DIR = path.resolve(__dirname, 'dist');

var config = {
   entry: SRC_DIR + '/index.js',
   output: {
      path: DIST_DIR + '/app',
      filename: 'build.js',
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;