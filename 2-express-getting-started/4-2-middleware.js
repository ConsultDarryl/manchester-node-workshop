const express = require('express');
const router = express.Router();
const app = express();

// Router-level middleware

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

app.use('/', router);

app.listen(8080, () => console.log('http://localhost:8080/'));