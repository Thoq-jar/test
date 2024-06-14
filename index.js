const http = require('http');
const hostname = 'localhost';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

server.listen(3000, hostname, () => {
  console.log(`Server running at http://${hostname}:3000/`);
});
