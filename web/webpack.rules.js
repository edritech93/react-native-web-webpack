module.exports = [
  {
    test: /\.(tsx|ts|jsx|js|mjs)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
      presets: ['module:metro-react-native-babel-preset'],
      // Re-write paths to import only the modules needed by the app
      plugins: ['react-native-web'],
    },
  },
  // {
  //   enforce: 'pre',
  //   test: /\.js$/,
  //   loader: 'source-map-loader',
  // },
];
