const express = require('express');
const app = express();

// An example of how to handle 404 errors

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

app.listen(8080, () => console.log('http://localhost:8080/xyz'));