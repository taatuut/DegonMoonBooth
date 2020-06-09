var express = require('express');
var router = express.Router();
// request is deprecated
//var request = require('request');
const axios = require('axios');
 
/* GET listCollections from backend. */
router.get('/', (req, res, next) => {
  axios.get('http://172.30.158.136:8080/javascripts/listCollections.js')
    .then(data => res.send(data))
    .catch(err => next(err));
})

module.exports = router;
