const ssr = require('goldssr');
const startServer = require('./server');

process.env.NODE_ENV = 'production';

main();

async function main() {
  await ssr.build();
}
