let mysql = require('mysql');
const connection = require ("../config/db.js")

const controller = {};

//list solo de brand para el seguro//
controller.listBrand = (req, res) => {
    let sql = 'SELECT name from brand ';

    connection.query(sql, function(err, results){
        // console.log(results)
        res.render('insurance.ejs', {
            results:results
        });
        
    });
}




module.exports = controller;