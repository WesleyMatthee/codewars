/*The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.

*/
function broken(x) {
	let result = [];
	let arr = x.split('');
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '0') {
			result.push('1');
		} else {
			result.push('0');
		}
	}
	return result.join('');
}

//Using Map
function broken(x) {
	return x
		.split('')
		.map(a => (a == '0' ? '1' : '0'))
		.join('');
}
