var express = require('express');
var router = express.Router();

/* GET listCollections from backend. */
router.get('/', function(req, res, next) {
  request('http://degonmoon-backend:8080/javascripts/listCollections.js', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.send(body)
  });
});

module.exports = router;
