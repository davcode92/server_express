//importation de express
//const student = require("./student");
const express = require('express');
//Assigner toutes les methodes(fonctionalités) express à une variable
const app = express();

//creation d'une simple request
//app.get("/home",(req,res)=>{
   // res.send("<h1>Hello f1 Group!</h1>");
//});

//custom midleware
//const midlewareexp = (req,res,next) => {
    //console.log("midleware function has been executed");
  //next();
//};

//app.get("/students/:id", midlewareexp,(req,res) => {
    //res.send(student.filter((el) => el.id == req.params.id));
 //});

 //express midleware
  
app.use(express.static("pages"));




//Assigner un port au Backend pour notre server
const PORT=5000;




//Création du server
var Server = app.listen(PORT, (err) => 
    err ? console.log(err) :console.log(`Server running on port ${PORT}`)
  );