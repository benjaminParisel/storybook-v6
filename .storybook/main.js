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

    config.externals = config.externals || {};
    Object.assign(config.externals, {
      ['bpmn-visualization']: 'BpmnVisualization'
    });

    console.log('config', config);
    // Return the altered config
    return config;
  },
}