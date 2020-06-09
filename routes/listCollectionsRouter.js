var express = require('express');
var router = express.Router();
// request is deprecated
//var request = require('request');
const axios = require('axios');
 
/* GET listCollections from backend. */
router.get('/', (req, res, next) => {
//  axios.get('http://degonmoon-backend:8080/javascripts/listCollections.js')
  axios.get('http://nu.nl')
    .then(data => res.send(data))
    .catch(err => next(err));
})

module.exports = router;
