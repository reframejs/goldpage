const {config} = require('@brillout/reconfig');
const HapiAdapter = require('@universal-adapter/hapi');
const assert = require('reassert');

const autoload = require('@brillout/autoload');

Object.assign(
  config,
  {
    projectFiles: {
      pagesDir: __dirname+'/pages',
      buildOutputDir: __dirname+'/dist',
    },
    getPageConfigFiles: () => ({welciPagi: require.resolve('../example/pages/landing-page')}),
  }
);

autoload();

//  process.exit();

module.exports = GoldSSR;

function GoldSSR(options) {

  assert(config.ServerRenderingFile);
  assert(config.StaticAssetsFile);
  const ServerRendering = require(config.ServerRenderingFile);
  const StaticAssets = require(config.StaticAssetsFile);
  assert(ServerRendering);
  assert(StaticAssets);

  const hapi = (
    new HapiAdapter([
      // Run `$ reframe eject server-rendering` to eject the server rendering code
      ServerRendering,
      // Run `$ reframe eject server-assets` to eject the static asset serving code
      StaticAssets,
    ])
  );

  Object.assign(
    this,
    {
      build,
      hapi,
    },
  );

  async function build() {
    const runBuild = require(config.runBuildFile);
    await runBuild();
  }
}