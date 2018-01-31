var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (request, response) {

    var filename = "." + url.parse(request.url, true).pathname;

    fs.readFile(filename, function (err, data) {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.write("404 Not Found");
        }
        else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
        }
        return response.end();
    });

}).listen(8080);

