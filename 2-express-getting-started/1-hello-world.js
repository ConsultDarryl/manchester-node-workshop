const express = require('express');
const app = express();

app.get('/', function (request, response) {
    response.send('Hello World!');
});

app.listen(8080, () => console.log('http://localhost:8080'));