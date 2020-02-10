//ls2 
var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));
//console.log(argv);

const readline = require('readline');

const resource = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const num = Math.round(Math.random());
let res;
console.log("Угадай число 1 или 0?");
//console.log(num);
resource.on('line', (cmd) => {
	if (cmd == num){
		res = 'Угадал';
		fs.writeFile(`${argv['_'][0]}`, res, () => {})
		console.log(res);
		resource.close();
		return;
	}	
	res = 'Не угадал';
	fs.writeFile(`${argv['_'][0]}`, res, () => {})
	console.log(res);
	resource.close();
})