var express = require('express');
var router = express.Router();
// request is deprecated
//var request = require('request');
const axios = require('axios');
 
/* GET listCollections from backend. */
router.get('/', function(req, res, next) {
  axios.get('http://degonmoon-backend:8080/javascripts/listCollections.js')
  .then(function (response) {
    // handle success
    res.send(response);
  })
  .catch(function (error) {
    // handle error
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  })
  .finally(function () {
    // always executed
  });
});

module.exports = router;
