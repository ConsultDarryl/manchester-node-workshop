const express = require('express');
const app = express();

var cb0 = function (req, res, next) {   // Beware the middleware!
    res.write('CB0  ');
    next();                             // Beware the middleware!
}

var cb1 = function (req, res, next) {
    res.write('CB1  ');
    next();
}

var cb2 = function (req, res, next) {
    res.write('CB2  ');
    res.end();
}

app.get('/', [cb0, cb1, cb2])
app.listen(8080, () => console.log('http://localhost:8080/'));
