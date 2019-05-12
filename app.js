var express = require('express');
var bodyparser = require('body-parser');
var request = require('request');

var app = express();

var myKey = config.my_Key;
var ListID = config.listId; //refers to the object.

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
    var data = {
        members: [
            {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }
    ]
    };

     var jsonData = JSON.stringify(data);

console.log(firstName, lastName, email)

var options = {
    url: "https://us20.api.mailchimp.com/3.0/lists/" + ListID,
    method: "POST", 
    headers: {
        "Authorization": "vincent1 " + myKey
    },
    body: jsonData
}

request(options, function(error,response,body){

if(error){
  res.sendfile(__dirname + "/failure.html")
}
else{
    console.log(response.statusCode)
    if (response.statusCode === 200){
        res.sendfile(__dirname + "/success.html")
    } else{
        res.sendfile(__dirname + "/failure.html");
    }
}
})
})

app.listen(3000, function () {
    console.log("The server is online")
});

//
//ListID
//