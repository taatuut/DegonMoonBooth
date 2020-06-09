var express = require('express');
var router = express.Router();
// request is deprecated
//var request = require('request');
const axios = require('axios');
 
/* GET listCollections from backend. */
router.get('/', (req, res, next) => {
//  axios.get('http://degonmoon-backend:8080/javascripts/listCollections.js')
  axios.get('https://httpstat.us/200')
    .then(data => res.send(JSON.stringify(data)))
    .catch(err => {
      console.log(err),
      next(err)
  });
})

module.exports = router;
