const http = require('http');

const server = http.createServer((req, res) => {
  const { url = '' } = req;
  res.writeHead(301, { location: `satgharadevelopmentfoundation.org${url}` });
  res.end();
});

server.listen(3000, () => {
  console.log('Server is Running');
});

