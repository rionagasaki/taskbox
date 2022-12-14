const path = require('path') 

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue",

  webpackFinal: async (config, { configType }) => {
    // @がsrcディレクトリをさすように設定
    config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src')
    // sass-loaderを設定
    config.module.rules.push({
      test: /\.sass$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    })
    return config
  },
}