const express = require('express');
const app = express();

// An example of route parameters

app.get('/users/:userId/books/:bookId', function (req, res) {
    let params = req.params; // { "userId": "34", "bookId": "8989" }
    res.send(params);
})
app.listen(8080, () => console.log('http://localhost:8080/users/34/books/8989'));