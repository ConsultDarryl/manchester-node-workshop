const express = require('express');
const app = express();

// An example of a catch-all route

app.all('/all-bases-covered', function (req, res) {
    res.send('Hello World');
})
app.listen(8080, () => console.log('http://localhost:8080/all-bases-covered'));

