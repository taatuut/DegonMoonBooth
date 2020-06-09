var express = require('express');
var router = express.Router();
const axios = require('axios');
 
/* GET listCollections from backend. */
router.get('/', (req, res, next) => {
  //axios.get('https://postman-echo.com/ip')
  axios.get('http://degonmoon-backend:8080/listCollections.js')
    .then((response) => {
        console.log(response);
        res.send(response.data);
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
