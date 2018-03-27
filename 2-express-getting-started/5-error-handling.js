const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// Error-handling middleware

function logErrors(err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' });
        // when not calling “next”, you are responsible for writing (and ending) the response
    } else {
        next(err); // You must return next(err)
    }
}

function catchAllErrorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err }); // completed the response
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logErrors);
app.use(catchAllErrorHandler);

app.listen(8080, () => console.log('http://localhost:8080/'));