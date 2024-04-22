const url = require('url');
const addr = 'http://localhost:8080/default.htm?year=2017&month=february';
const q = url.parse(addr, true);


// splitting url
console.log(q.host); // localhost:8080
console.log(q.pathname); // default.htm
console.log(q.search); // ?year=2017&month=february (query)

const qdata = q.query; // returns object
console.log(qdata.year);

