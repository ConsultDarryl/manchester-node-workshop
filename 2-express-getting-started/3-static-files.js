const express = require('express');
const path = require('path');
const app = express();

const publicFolder = path.join(__dirname, 'public');  // __dirname  directory name of the current module

const options = {
    etag: true,
    maxAge: '1d',
    lastModified: true,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}

app.use('/', express.static(publicFolder, options));

app.listen(8080, () => {
    console.log('http://localhost:8080/index.html');
    console.log('http://localhost:8080/images/smiley.png');
});

// app.use('/css',    express.static(publicFolder + '/css'));
// app.use('/images', express.static(publicFolder + '/images'));
// app.use('/js',     express.static(publicFolder + '/js'));