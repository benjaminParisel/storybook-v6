module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {

    config.resolve = config.resolve || {};
    Object.assign(config.resolve, {
      mainFields: ['module', 'main'],
    });

    console.log('config', config);
    // Return the altered config
    return config;
  },
}