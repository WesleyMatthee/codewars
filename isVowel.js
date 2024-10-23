// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

//Function

function isVow(char) {
	let result = [];

	char.forEach(num => {
		if (num === 97) {
			result.push('a');
		} else if (num === 101) {
			result.push('e');
		} else if (num === 105) {
			result.push('i');
		} else if (num === 111) {
			result.push('o');
		} else if (num === 117) {
			result.push('u');
		} else {
			result.push(num);
		}
	});
	return result;
}

//Function using map()
const v = { 97: 'a', 101: 'e', 105: 'i', 111: 'o', 117: 'u' };
const isVow = a => a.map(x => v[x] || x);
