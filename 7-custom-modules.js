var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write("The date and time are currently: ");
    response.end();
}).listen(8080);