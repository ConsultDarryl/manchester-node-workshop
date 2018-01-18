var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8080);

//fs.writeFile("myfile.txt", "Hey there!", function (err) { });
//fs.readFile('demofile1.html', function (err, data) { });
//fs.unlink("xyz"); // delete
