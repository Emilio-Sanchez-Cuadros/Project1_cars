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

router.post('/', carsController.save1);
router.get('/delete/:id', carsController.delete);
router.get('/edit/:id', carsController.edit1);
router.post('/update/:id', upload, carsController.update1);
module.exports = router;
