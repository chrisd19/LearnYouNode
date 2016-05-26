var fs = require('fs');

var directory = process.argv[2];
var extension = process.argv[3];
var re = new RegExp('\.' + extension + '$');

fs.readdir(directory, function(err, list) {
	list.forEach(function(file) {
		if (re.test(file)) {
			console.log(file);
		}
	});
});

