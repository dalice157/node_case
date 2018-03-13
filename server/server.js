var express = require('express');
var app = express();
var path = require('path');
var routes = require('../routes.js')(app);
var port = 8000;
var wrFile = require('../src/wrFile').write;

app.use(express.static(path.join('public'))); /* 將預設路徑設在public*/


app.get('/', function (req, res) { //靜態網頁
  res.sendFile('index.html');
});


app.get('/test', function (req, res) {
  res.send(require('../public/test.json'));
});

app.listen(port,() => console.log(`listening on ${port}`));