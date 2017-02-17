var express = require('express');
var app = express();
var topics = [{
  id: 'deforestation',
  img: '/img/HomeDeforest.jpg',
},{
  id: 'pollution',
  img: '/img/pollutionhome.jpg',
},{
  id: 'species-extinction',
  img: '/img/SpeciesExtinction.jpg',
},{
  id: 'climate-change',
  img: '/img/climatehome.jpg'
}];

app.set('port', (process.env.PORT || 5000));

app.use('/js/lib', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', { topics });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
