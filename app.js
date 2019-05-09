var express = require('express');
var bodyparser = require('body-parser');
var request = require('request');

var app = express();


app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
})

app.listen(3000, function () {
    console.log("The server is online")
});