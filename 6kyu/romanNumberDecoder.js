/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/

function romanToInt(roman) {
	const romanHash = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	let accumulator = 0;
	for (let i = 0; i < roman.length; i++) {
		if (roman[i] === 'I' && roman[i + 1] === 'V') {
			accumulator += 4;
			i++;
		} else if (roman[i] === 'I' && roman[i + 1] === 'X') {
			accumulator += 9;
			i++;
		} else if (roman[i] === 'X' && roman[i + 1] === 'L') {
			accumulator += 40;
			i++;
		} else if (roman[i] === 'X' && roman[i + 1] === 'C') {
			accumulator += 90;
			i++;
		} else if (roman[i] === 'C' && roman[i + 1] === 'D') {
			accumulator += 400;
			i++;
		} else if (roman[i] === 'C' && roman[i + 1] === 'M') {
			accumulator += 900;
			i++;
		} else {
			accumulator += romanHash[roman[i]];
		}
	}
	return accumulator;
}
