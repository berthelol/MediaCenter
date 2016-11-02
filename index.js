// index.js

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  //res.send('It Works!');             // one line response
  res.sendfile('index.html');     // or send a webpage you designed
});

app.get('/toto', function (req, res) {

  res.send('it\' working!!!');     // or send a webpage you designed
});

var server = app.listen(81, function () {

  console.log('Node Express Webserver Started ' + app.address().port);

});
