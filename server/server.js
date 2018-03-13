var express = require('express');
var app = express();
var path = require('path');
var routes = require('../routes.js')(app);
var port = 8000;
var fs = require('fs');

app.use(express.static(path.join('public'))); /* 將預設路徑設在public*/

app.get('/', function (req, res) { //靜態網頁
  res.sendFile('index.html');
});


app.get('/test', function (req, res) {
  fs.readFile('./public/test.json', function (err, data) {
    res.end( data );
  });
});

app.get('/stat', function (req, res) {
  fs.readdir('./public', (err, files) => {
    console.log(files);
  });
});

app.listen(port,() => console.log(`listening on ${port}`));