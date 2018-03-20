const express = require('express');
const app = express();

// define routes together to avoid mistakes and reduce boilerplate

app.route('/book')
    .get(function (req, res) { res.send('Get a book') })
    .post(function (req, res) { res.send('Add a book') })
    .put(function (req, res) { res.send('Update a book') })

app.listen(8080, () => console.log('http://localhost:8080/book'));