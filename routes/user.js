var express = require('express');
var router = express.Router();
let multer = require ('multer')

const carsController = require('../controllers/carsController');

let storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "public/uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
 });
 var upload = multer({
    storage: storage
 }).single('photo')


router.get('/', carsController.listUser);
router.post('/', upload, carsController.save1);
router.get('/delete/:id', carsController.delete);
router.get('/update/:id', carsController.edit);




module.exports = router;
