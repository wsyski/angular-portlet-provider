var webpack = require("webpack");
var path = require("path");

module.exports = {
  mode: "development",
  optimization: {
    minimize: false,
    noEmitOnErrors: true
  },
  entry: {
    vendor: [
      'zone.js/dist/zone',
      "@angular/animations",
      "@angular/common",
      "@angular/core",
      "@angular/forms",
      "@angular/platform-browser",
      "@angular/platform-browser-dynamic",
      "@angular/router",
      "rxjs"
    ]
  },
  output: {
    path: path.join(__dirname, 'dll'),
    filename: "[name]-es5.js",
    library: "[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve("dll", "[name]-manifest.json"),
      name: "[name]",
      entryOnly: true
    })
  ]
};
