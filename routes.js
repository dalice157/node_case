var express = require('express');

module.exports = function (app) {
	app.get('/send', function (req, res) { 
		res.send(req.query.name + ' ' + req.query.tel);
	});
};