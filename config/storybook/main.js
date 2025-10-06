const { buildScssLoader } = require('../build/loaders/buildScssLoader');
const path = require('path');

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
module.exports = {
   stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|ts|tsx)'],
   addons: [
      '@storybook/addon-essentials',
      '@storybook/addon-interactions',
      '@storybook/addon-links',
      '@storybook/addon-docs',
      '@storybook/addon-webpack5-compiler-swc',
   ],
   framework: {
      name: '@storybook/react-webpack5',
      options: {},
   },
   webpackFinal: async config => {
      config.module.rules.push(buildScssLoader({ isDev: true }));

      config.resolve.alias = {
         ...config.resolve.alias,
         app: path.resolve(__dirname, '../../src/app'),
         entities: path.resolve(__dirname, '../../src/entities'),
         features: path.resolve(__dirname, '../../src/features'),
         shared: path.resolve(__dirname, '../../src/shared'),
         widgets: path.resolve(__dirname, '../../src/widgets'),
         pages: path.resolve(__dirname, '../../src/pages'),
      };

      return config;
   },
};
