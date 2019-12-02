const { environment } = require('@rails/webpacker')
const webpack = require("webpack");
environment.plugins.prepend(
  "Provide",
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery" // < I think this could be the line you need.
  })
)
module.exports = environment
