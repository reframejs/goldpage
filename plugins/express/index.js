const config = require('@brillout/reconfig');
console.log('l2', config);
const assert = require('@brillout/reassert');
const ExpressAdapter = require('@universal-adapter/express');

config.ssrCoin.serverAdapters = config.ssrCoin.serverAdapters || {};
config.ssrCoin.serverAdapters.express = (
  new ExpressAdapter(() => {
    const {StaticAssets, ServerRendering} = config.ssrCoin;
    assert.internal(StaticAssets);
    assert.internal(ServerRendering);
    return [
      ServerRendering,
      StaticAssets,
    ];
  })
);
