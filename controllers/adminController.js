let mysql = require('mysql');
const connection = require ("../config/db.js")

const controller = {};

//list solo de brand para el admin view//
controller.listBrand = (req, res) => {
    let sql = 'SELECT logo from brand ';

    connection.query(sql, function(err, results){
        // console.log(results)
        res.render('admin.ejs', {
            results:results
        });
        
    });
}


// save para el admin, añadir nuevas marcas
controller.save2 = (req, res) => {
    let name = req.body.name;
    let logo = req.file.originalname;
    let sql = 'INSERT INTO brand SET? ';
    connection.query(sql, {
        name,
        logo,
    }, function(err, results) {
        if(err){
            throw err;
        }
        console.log(results); 
        res.redirect('admin')
    })
};


controller.delete = (req, res) => {
    let id = req.params.id;
    let sql = 'DELETE FROM brand WHERE model_id = ' + id; 
    connection.query(sql, function(err, results){
        if (err) {
            throw err;
        } else {
            res.redirect('/admin');
        }
    })
}

controller.edit = (req, res) => {
    let id = req.params.id;

    connection.query("SELECT * FROM model WHERE model_id = " + id, (err, results) => {
        console.log(results)
        if (err) {
            throw err;
        } else {
                res.render('admin.ejs', {
                    results: results[0],
                })
            }
    })
};

controller.edit1 = (req, res) => {// cambiar nombre
    let id = req.params.id;
    connection.query("SELECT * FROM model WHERE model_id = " + id, (err, results1) => {
        console.log(results1)
    let brand_id = results1[0].brand_id

        connection.query("SELECT * FROM brand WHERE brand_id = " + brand_id, (err, results) => {
            // console.log(results)
            if (err) {
                throw err;
            } else {
                    res.render('userCars.ejs', {
                        results: results[0],
                        results1:results1[0]
                    })
                    
                }
        })
    })
};

controller.update1 = (req, res) => {
    let id = req.params.id;
    let country = req.body.country;
    let photo = req.file.originalname;
    let model = req.body.model;
    let year = req.body.year;
    let kms = req.body.kms;
    let price = req.body.price;
    let description = req.body.description;
    console.log(id)
    let sql =  'UPDATE model set? where model_id =' + id;
    console.log(year)
    connection.query(sql, { model, photo, year, kms, price, country, description }, (err, rows) => {
            if (err) {
                throw err;
            } else {
                res.redirect('/user')  
        };
    })
     
};

module.exports = controller;