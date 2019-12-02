var express = require('express');
var router = express.Router();
let multer = require ('multer')

const carsController = require('../controllers/carsController');
const adminController = require('../controllers/adminController');

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
 }).single('logo')


router.get('/', adminController.listBrand);
router.post('/', upload, adminController.save2);
router.get('/delete/:id', adminController.delete);
router.get('/update/:id', adminController.edit);




module.exports = router;
