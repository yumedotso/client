const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false
      }
    },
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-next-router'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  },
  staticDirs: ['../public'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            url: false
          }
        },
        'sass-loader'
      ]
    })

    return config
  }
}
