const { merge } = require('webpack-merge');
const baseConfig = require('./config/base');
const prodConfig = require('./config/prod');
const devConfig = require('./config/dev');

module.exports = (env, options) => {
  return options.nodeEnv === 'production'
    ? merge(baseConfig, prodConfig)
    : merge(baseConfig, devConfig);
};
