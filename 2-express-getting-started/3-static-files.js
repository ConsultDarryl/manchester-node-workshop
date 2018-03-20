const express = require('express');
const path = require('path');

const app = express();
const options = {};
const folder = path.join(__dirname, 'public');

app.use(
    express.static(folder, options)
);

app.listen(8080, () => {
    console.log('http://localhost:8080/index.html');
    console.log('http://localhost:8080/images/smiley.png');
});



// app.use('/css', express.static(path.join(__dirname, 'public/css')));
// app.use('/images', express.static(path.join(__dirname, 'public/images')));
// app.use('/js', express.static(path.join(__dirname, 'public/js')));


// const options = {
//     etag: true,
//     maxAge: '1d',
//     lastModified: true,
//     setHeaders: function (res, path, stat) {
//         res.set('x-timestamp', Date.now())
//     }
// }