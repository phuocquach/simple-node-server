import { createServer } from 'http';
import getMain from './main.js';

const main = getMain();
main.run();

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, I'm console app!");
}

const server = createServer(requestListener);
server.listen(8080);