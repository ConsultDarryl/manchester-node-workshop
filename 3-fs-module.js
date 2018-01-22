var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    fs.readFile('demofile1.html', function (err, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        response.end();
    });
}).listen(8080);

// fs.readFile('demofile1.html', function (err, data) { });
// fs.writeFile("myfile.txt", "Hey there!", function (err) { });
// fs.appendFile('log.txt', 'abc', function (err) { });
// fs.unlink("xyz"); // delete
