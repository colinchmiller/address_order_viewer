var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/viewer';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));


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