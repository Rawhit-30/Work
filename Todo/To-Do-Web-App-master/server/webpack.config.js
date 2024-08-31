// server/webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js',
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 4000,
    setupMiddlewares: (middlewares, devServer) => {
      // Add custom server-side middleware if needed
      middlewares.unshift((req, res, next) => {
        console.log('Custom server-side middleware:', req.method, req.url);
        next();
      });
      return middlewares;
    },
  },
  // Other configurations...
};
