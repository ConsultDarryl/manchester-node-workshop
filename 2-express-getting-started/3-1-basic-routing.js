const express = require('express');
const app = express();

app.get('/', function (request, response) { response.send('GET') });
app.post('/', function (request, response) { response.send('POST') });
app.put('/user', function (request, response) { response.send('PUT /user') });
app.delete('/user', function (request, response) { response.send('DELETE /user') });

app.listen(8080, () => console.log('http://localhost:8080'));