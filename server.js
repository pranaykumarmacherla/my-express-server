// jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req,res){
res.send("<h1>Hello</h1>");
});
app.get("/contact", function(req,res){
res.send("Contact me at pranaykumarmacherla@gmail.com");
});
app.get("/about", function(req,res){
res.send("I'm Pranay Kumar");
});
app.get("/hobbies", function(req,res){
res.send("Writing");
});
app.listen(3000, function(){
    console.log("Server started on port 3000...");
});