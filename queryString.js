const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  const q = url.parse(req.url, true).query;
  const txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);

// insert query to url
// http://localhost:8080/?year=2017&month=July