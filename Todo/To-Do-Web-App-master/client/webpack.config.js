// client/webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true,
    setupMiddlewares: (middlewares, devServer) => {
      // Add custom middleware if needed
      middlewares.unshift((req, res, next) => {
        console.log('Custom client-side middleware:', req.method, req.url);
        next();
      });
      return middlewares;
    },
  },
  // Other configurations...
};
