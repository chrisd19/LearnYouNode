var arr = (process.argv).slice(2).reduce(function(a, b) {
	return a + (+b);
}, 0);

console.log(arr);



