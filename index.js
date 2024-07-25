const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(301, { location: `https://satgharadevelopmentfoundation.org` });
  res.end();
});

server.listen(3000, () => {
  console.log('Server is Running');
});

