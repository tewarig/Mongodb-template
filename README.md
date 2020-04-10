# Mongodb-template

template for normal node.js app
//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
 app.use(express.static("public"));
 app.use('view engine','ejs');
 app.use(bodyParser.urlencoded({
   extended: true
 }));

 app.listen(3000 , function (){
   console.log("Server started on port 3000");
 });

