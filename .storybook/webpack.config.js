const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const path = require('path')

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(j|t)sx?$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { typescript: true }]],
    },
  })
  config.plugins.push(new OpenBrowserPlugin({ url: 'http://localhost:6006/' }))
  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.modules.push(path.resolve(__dirname, '../'))
  config.mode = 'development'
  return config
}
