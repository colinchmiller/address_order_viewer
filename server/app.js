var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/viewer';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));


//getting the users to upload into the dropdown menu
app.get('/user', function(req, res){
    var users = [];

    pg.connect(connectionString, function (err, client, done){
        var query = client.query("SELECT name FROM users");

        query.on('row', function(row){
            users.push(row);
        });

        query.on('end', function(){
            client.end();
            console.log("Is the user data getting pulled down?: ", users);
            return res.json(users);
        });
        if (err) {
            console.log("Error", err);
        }
    })
});

app.get('/address', function(req, res){
    console.log('Confirmed Client to Server')
});

app.set("port", process.env.PORT || 5000);

app.get("/*", function(req, res){
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get("port"), function(req, res){
    console.log("Take a listen to port: ", app.get("port"));
});