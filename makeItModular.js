var fs = require('fs');
var myModule = require('./myModule.js');

myModule(process.argv[2], process.argv[3], function(err, list) {
	if (err) { console.log(err); }
	else {
		list.forEach(function(file) {
			console.log(file);
		});
	}
});

