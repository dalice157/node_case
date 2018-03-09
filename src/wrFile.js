var fs = require('fs');
var api = require('../api/db');
var data = JSON.stringify(api);

fs.writeFile('./public/test.json', data, function (err) {
	if (err) throw err;
	console.log("嘿嘿", data);
});