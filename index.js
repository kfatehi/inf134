var express = require('express');
var app = express();
var fs = require('fs');
var topics = require('./topics');

app.set('port', (process.env.PORT || 5000));

app.use('/lib', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', { topics, donut: false });
});

app.get('/a', function(req, res) {
  res.render('index', { topics, donut: false });
});

app.get('/b', function(req, res) {
  res.render('index', { topics, donut: { size: '100px' } });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
