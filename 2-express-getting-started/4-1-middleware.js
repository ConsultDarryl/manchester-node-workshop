const express = require('express');
const app = express();

// Application-level middleware

app.use(function (req, res, next) {     // Using middleware with app.use
    console.log('Time:', Date.now());
    next();
});

app.get('/user', function (req, res, next) { // Adding middleware to a route hanlder
    res.send('USER');
});

app.listen(8080, () => console.log('http://localhost:8080/user'));