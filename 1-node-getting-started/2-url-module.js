const url = require('url');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var urlObject = url.parse(adr, true);

console.log(urlObject.host); //returns 'localhost:8080'
console.log(urlObject.pathname); //returns '/default.htm'
console.log(urlObject.search); //returns '?year=2017&month=february'

var qdata = urlObject.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'

