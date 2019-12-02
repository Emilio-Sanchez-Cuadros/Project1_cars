var express = require('express');
var router = express.Router();

const carsController = require('../controllers/carsController');

router.get('/', carsController.list2);

module.exports = router;
