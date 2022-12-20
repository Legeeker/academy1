var mysql = require("mysql");
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'academy1'

});


exports.formation = function(req, res){
    connection.query("select * from academy1;", function(error, result){
        if (error) console.log(error);
    res.render('home.ejs', {formations: result});
    });
}