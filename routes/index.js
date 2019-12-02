var express = require('express');
var router = express.Router();

const carsController = require('../controllers/carsController');

router.get('/', carsController.list);
// router.post('/', carsController.save1);

module.exports = router;
