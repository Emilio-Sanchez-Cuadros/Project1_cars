let mysql = require('mysql');
const connection = require("../config/db.js")

const controller = {};

// hacer list solo de brand//
controller.listBrand = (req, res) => {
    let sql = 'SELECT * from brand ';
    // let sql = "select * from brand "

    connection.query(sql, function (err, results) {
        // console.log(results)
        res.render('user.ejs', {
            results: results
        });

    });
}


controller.list = (req, res) => {
    // let sql = 'SELECT * from brand INNER JOIN model ON brand.brand_id=model.brand_id';
    //         // let sql = "select * from brand "

    connection.query(function (err, results) {
        // console.log(results)
        res.render('index.ejs', {
            results: results
        });

    });
}
// list para la página del user, en cuanto añade un coche, este se pinta en la misma página
controller.listUser = (req, res) => {
    let sql = 'SELECT name from brand';
    connection.query(sql, function (err, results) {
        sql = 'SELECT * from brand INNER JOIN model ON brand.brand_id=model.brand_id';
        connection.query(sql, function (err, results2) {
            res.render('user.ejs', {
                brands: results,
                results: results2
            });
        });
    });
}


// list para la página de ofertas, ahí se mostrarán todos los coches que tiene la página en venta
controller.list2 = (req, res) => {
    sql = 'SELECT * from brand INNER JOIN model ON brand.brand_id=model.brand_id ORDER BY price DESC';
    connection.query(sql, function (err, results) {
        // console.log(results)
        res.render('offers.ejs', {
            results: results
        });
    });
};

// list para la página de detalles del coche, ahí se mostrará el coche cuando le das a view desde la vista de ofertas
controller.list3 = (req, res) => {
    let id = req.params.id;
    connection.query("SELECT * FROM model WHERE model_id = " + id, (err, results) => {
        console.log(results)
        if (err) {
            throw err;
        } else {
            res.render('carDetails.ejs', {
                results: results[0],
            })
        }
    })
};

// save para el user, añadir nuevos coches
controller.save1 = (req, res) => {
    let country = req.body.country;
    let photo = req.file.originalname;
    let model = req.body.model;
    let year = req.body.year;
    let kms = req.body.kms;
    let price = req.body.price;
    let description = req.body.description;
    let brandID = req.body.name
    let sql2 = 'INSERT INTO model SET? ';
    let sql = 'SELECT brand_id FROM brand WHERE name =?  ';


    connection.query(sql, brandID, function (err, results) {
        let brand_id = results[0].brand_id


        connection.query(sql2, {
            brand_id,
            photo,
            country,
            model,
            year,
            kms,
            price,
            description
        }, function (err, results) {
            if (err) {
                throw err;
            }
            console.log(results);
            res.redirect('user')
        })
    });
}

controller.delete = (req, res) => {
    let id = req.params.id;
    let sql = 'DELETE FROM model WHERE model_id = ' + id;
    connection.query(sql, function (err, results) {
        if (err) {
            throw err;
        } else {
            res.redirect('/user');
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
            res.render('userCars.ejs', {
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
                    results1: results1[0]
                })

            }
        })
    })
};


controller.update1 = (req, res) => {


    let id = req.params.id;
    console.log(req.file)
    connection.query("SELECT * FROM model WHERE model_id = " + id, (err, results) => {
        if (req.file === undefined || null) {
            let id = req.params.id;
            var photo = results[0].photo;
            let country = req.body.country;
            let model = req.body.model;
            let year = req.body.year;
            let kms = req.body.kms;
            let price = req.body.price;
            let description = req.body.description;
            let sql = 'UPDATE model set? where model_id =' + id;
            connection.query(sql, { model, photo, year, kms, price, country, description }, (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    res.redirect('/user')
                };
            })
        } else {
            let id = req.params.id;
            let country = req.body.country;
            var photo = req.file.originalname;
            let model = req.body.model;
            let year = req.body.year;
            let kms = req.body.kms;
            let price = req.body.price;
            let description = req.body.description;
            let sql = 'UPDATE model set? where model_id =' + id;
            connection.query(sql, { model, photo, year, kms, price, country, description }, (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    res.redirect('/user')
                };
            })
        }
    })
}

module.exports = controller;