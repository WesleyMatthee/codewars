function romNumDecoder(num) {
	let romNum = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 300,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};

	output = '';
	for (let i in romNum) {
		while (num >= romNum[i]) {
			output += i;
			num -= romNum[i];
		}
	}
	return output;
}
