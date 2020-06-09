var express = require('express');
var router = express.Router();
// request is deprecated
//var request = require('request');
const axios = require('axios');
 
/* GET listCollections from backend. */
router.get('/', (req, res, next) => {
/*
//  axios.get('http://degonmoon-backend:8080/javascripts/listCollections.js')
axios.get('https://postman-echo.com/ip')
    .then(data => res.send(JSON.stringify(data)))
    .catch(err => {
      console.log(err),
      next(err)
  });
*/

//  axios.get('http://degonmoon-backend:8080/javascripts/listCollections.js')
axios.get('https://postman-echo.com/ip')
  .then((response) => {
      console.log(response);
      res.send(response);
  })
  .catch((error) => {
      if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
      } else if (error.request) {
          console.log(error.request);
      } else {
          console.log('Error', error.message);
      }
      console.log(error.config);
  });

})

module.exports = router;
