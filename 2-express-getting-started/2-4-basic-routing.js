const express = require('express');
const app = express();

// An example of route parameters

app.get('/users/:userId/books/:bookId', function (req, res) {
    let params = req.params; // { "userId": "123", "bookId": "abc" }
    res.send(params);
})
app.listen(8080, () => console.log('http://localhost:8080/users/123/books/abc'));