const Hapi = require('hapi');
const ssr = require('ssr-coin');

startServer();

async function startServer() {
  const server = Hapi.Server({
    port: process.env.PORT || 3000,
    debug: {request: ['internal']},
  });

  await server.register(ssr.hapi);

  await server.start();

  console.log('Server running');
}