const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // Regra para lidar com arquivos CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Outras regras para lidar com outros tipos de arquivos, se necessário
    ],
  },
};
