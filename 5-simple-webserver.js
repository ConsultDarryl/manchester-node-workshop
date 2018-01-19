var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {

    var filename = "." + url.parse(req.url, true).pathname;

    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write("404 Not Found");
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
        }
        return res.end();
    });

}).listen(8080);

