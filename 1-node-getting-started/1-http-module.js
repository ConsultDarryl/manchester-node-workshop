var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
   
    var url = request.url;

    response.write(url);   
    response.end();
}).listen(8080);
