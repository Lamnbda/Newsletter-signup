var express = require('express');
var bodyparser = require('body-parser');
var request = require('request');

var app = express();

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});



app.post('/', function (req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
console.log(firstName, lastName, email)
})

app.listen(3000, function () {
    console.log("The server is online")
});

//a06d629d471a7dbb668471561fb9f2d6-us20