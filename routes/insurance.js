var express = require('express');
var router = express.Router();

const insuranceController = require('../controllers/insuranceController');

router.get('/', function(req, res) {
    res.render('./insurance');
  });
  
  router.get('/', insuranceController.listBrand);
  


module.exports = router;
