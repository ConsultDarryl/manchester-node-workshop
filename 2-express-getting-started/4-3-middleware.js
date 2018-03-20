const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Third-party middleware e.g. cookie-parser
// npm install cookie-parser

app.use(cookieParser()); // load the cookie-parsing middleware

app.get('/', function (req, res) {
    console.log('Cookies: ', req.cookies);
    res.send('Check the console in Visual Studio');
})

app.listen(8080, () => console.log('http://localhost:8080/'));