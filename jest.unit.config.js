const jestConfig = require('./jest.config.js');

module.exports = {
  ...jestConfig,
  testRegex: '.*\\.spec\\.ts$',
};
