var express = require("express");
var http = require("http");
var app = express();
var port = process.env.PORT || 8000;
var cookieParser = require("cookie-parser");
var multer = require("multer");

app.use(cookieParser(process.env.COOKIE_SECRET || 'such-secret-shhhh'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.use('/public', express.static('./public'));
app.use('/css', express.static('./public/css'));
app.use('/images', express.static('./public/images'));

app.listen(port);
console.log('The magic happens on port ' + port);