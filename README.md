# Mongodb-template

//jshint esversion:6
const express = require("express");  <br>
const bodyParser = require("body-parser"); <br>
const ejs = require("ejs"); <br>

const app = express(); <br>
 app.use(express.static("public")); <br>
 app.set('view engine','ejs'); <br>
 app.use(bodyParser.urlencoded({ <br>
   extended: true <br>
 })); <br>

app.get("/",function(req,res){ <br>
  res.render("home");<br>
});<br>

app.get("/login",function(req,res){<br>
  res.render("login");<br>
});<br>

app.get("/register",function(req,res){<br>
  res.render("register");<br>
});<br>

 app.listen(3000 , function (){<br>
   console.log("Server started on port 3000");<br>
 });<br>


