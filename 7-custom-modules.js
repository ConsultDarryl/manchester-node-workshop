var http = require('http');
var dt = require('./my-date-time');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write("The date and time are currently: " + dt.myDateTime());
    response.end();
}).listen(8080);