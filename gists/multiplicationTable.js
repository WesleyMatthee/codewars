const multiplicationTable = function (maxValue) {
	let table = '';

	for (let i = 1; i <= maxValue; i++) {
		let row = '';
		for (let j = 1; j <= maxValue; j++) {
			row += i * j + ' ';
		}
		table += row + '\n';
	}

	return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
