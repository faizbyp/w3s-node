var http = require('http');
var port = 8080;

http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});
  res.end('Hello World');
  console.log(`Server running on ${port}`);
}).listen(port);