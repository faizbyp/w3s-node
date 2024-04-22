// insert type: module to package.json to enable esm import
import http from 'http';
import { upperCase } from "upper-case";

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(upperCase("Hello World!"));
  res.end();
}).listen(8080);