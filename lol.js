var url= require('url');
var adr= 'https://localhost:8080/default.htm?year=2017&moth=february';
var q= url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var  http = require("http");
var qdata= q.query;
console.log(qdata.month);