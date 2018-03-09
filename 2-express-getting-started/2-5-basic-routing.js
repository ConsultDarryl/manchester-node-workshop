const express = require('express');
const app = express();

// Chaining callbacks together 

var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}

var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}

var cb2 = function (req, res) {
    console.log('CB2');
    res.send('Check the console in Visual Studio');
}

app.get('/example/c', [cb0, cb1, cb2])
app.listen(8080, () => console.log('http://localhost:8080/example/c'));