const webpack = require('webpack');
const path = require('path');

const compiler = webpack({
  entry: 'index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
});

const watching = compiler.watch({
  /* watchOptions */
  aggregateTimeout: 300,
  poll: undefined
}, (err, stats) => {
  // Print watch/build result here...
  console.log(stats);
});
