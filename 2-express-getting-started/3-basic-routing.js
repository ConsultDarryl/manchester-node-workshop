const express = require('express');
const app = express();

app.get('/', function (request, response) {
    response.send('Hello World!')
})

app.post('/', function (request, response) {
    response.send('Got a POST request')
})

app.put('/user', function (request, response) {
    response.send('Got a PUT request at /user')
})

app.delete('/user', function (request, response) {
    response.send('Got a DELETE request at /user')
})

app.listen(3000, () => console.log('http://localhost:3000'));

