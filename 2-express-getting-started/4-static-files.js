const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/css', express.static(path.join(__dirname, 'public/css')));
// app.use('/images', express.static(path.join(__dirname, 'public/images')));
// app.use('/js', express.static(path.join(__dirname, 'public/js')));

app.listen(8080, () => {
    console.log('http://localhost:8080/index.html');
    console.log('http://localhost:8080/images/smiley.png');
});



