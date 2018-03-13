var fs = require('fs');
var api = require('../api/db');
var data = JSON.stringify(api);

// fs.writeFile('./public/test.json', data, function (err) {
// 	if (err) throw err;
// })

module.exports  = {
  write: fs.writeFile('./public/test.json', data, function (err) {
		if (err) throw err;
		fs.readFile('./public/test.json', function (err, dataFile) {
      if (err) {
         return console.error(err);
      }
	 	});
	})
};