module.exports = {
  $plugins: [
    /*
    require('@reframe/hapi'),
    require('@reframe/project-files'),
    require('@reframe/start'),
    require('@reframe/eject'),
    */

    require('@reframe/server'),
    require('@reframe/browser'),
    require('@reframe/react'),
    require('@reframe/path-to-regexp'),
    require('@reframe/build'),
  ],

  projectFiles: {
    pagesDir: __dirname+'/pages',
    buildOutputDir: __dirname+'/dist',
  },

  getPageConfigFiles: () => ({welciPagi: require.resolve('../example/pages/landing-page')}),
};
