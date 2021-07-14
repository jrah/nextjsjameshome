const { getStoriesPaths } = require('slice-machine-ui/helpers/storybook')
module.exports = {
  stories: [...getStoriesPaths(), /*...*/],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-postcss'],
}
