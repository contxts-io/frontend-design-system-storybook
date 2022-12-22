module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    'storybook-dark-mode', // light, dark mode switcher
  ],
  framework: '@storybook/react',
  features: {
    previewMdx2: true,
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
