var webpackCoverageConfig = require('../webpack/coverage');

module.exports = function (config) {
  config.set({
    browsers: ['NodeWebkit'],
    basePath: '../../src',
     files: [
    //   'client/components/**/*.js',
    //   'client/reducers/**/*.js',
    //   'client/actions/thunkCreators.js', TODO split action creators to action creators and thunk creators
    // and include it in .babelrc babel istanbul plugin
    //   'server/**/*.js'
      'server/middleware/**/*.js',
      'server/routers/**/*.js',
    ],
    browserNoActivityTimeout: 60000,
    frameworks: [
      'jasmine',
    ],
    preprocessors: {
      '**/*.js': ['webpack']
    },
    reporters: ['progress', 'coverage-istanbul', 'coverage'],
    webpack: webpackCoverageConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    coverageReporter: {
      type : 'html',
      dir : '../coverage/',
      includeAllSources: true
    }
  });
}