const express = require('express');
const app = express();

// An example 404 handler

app.use(function (req, res, next) { // Beware the Middleware!
  res.status(404).send("Sorry can't find that!");
});

app.listen(8080, () => console.log('http://localhost:8080/xyz'));