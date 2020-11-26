
var express = require('express');


var app = express();
app.get('/', function (req, res) {

	res.send('Hello API');

})
app.listen(2881, function () {

	console.log('API app started');

})



