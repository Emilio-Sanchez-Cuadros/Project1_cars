var express = require('express');
var router = express.Router();

const carsController = require('../controllers/carsController');


router.get('/:id', carsController.list3);





module.exports = router;
