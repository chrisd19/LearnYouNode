var fs = require('fs');

module.exports = function(dir, ext, callback) {
	var re = new RegExp('\.' + ext + '$');
	var output;

	fs.readdir(dir, function(err, list) {
		if (err) {
			callback(err);
		}
		else {
			output = list.filter(function(file) {
				return re.test(file);
			});
			callback(null, output);
		}
	});
}
