//import express 
let express = require("express");

//Initialize the app
let app = express();

// // je dois faire la connection avec mon serveur 
// var mysql = require("mysql");
// //Database connection 
// var connection = mysql.createConnection({
//     host    : 'localhost',
//     user    : 'root',
//     password: 'root',
//     database: 'academy1'// ma table 
// });
// connection.connect(function(error){if(error) console.log(error)});


//send message for default URL 
app.get('/',(rep,res)=>{
    res.send("hello world !");
});

//launch app to listen to specified port 
app.listen(8000,function(){
    console.log("Running on port 8000");
});