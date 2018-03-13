const express = require('express');
const app = express();

// An example of regex route matching

app.get('/ab?cd', function (req, res) { res.send('Matched Route 1') }); //acd and abcd
app.get('/ab+cd', function (req, res) { res.send('Matched Route 2') }); //abcd, abbcd, abbbcd, and so on
app.get('/ab*cd', function (req, res) { res.send('Matched Route 3') }); //abcd, abxcd, abRANDOMcd, ab123cd, and so on.

app.listen(8080, () => {
    console.log('http://localhost:8080/acd');
    console.log('http://localhost:8080/abcd');
    console.log('http://localhost:8080/abbcd');
    console.log('http://localhost:8080/abRANDOMcd');
});
