const { getStoriesPaths } = require('slice-machine-ui/helpers/storybook')
module.exports = {
  stories: [...getStoriesPaths(), '../components/macro/**/*.stories.js'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-postcss'],
}
