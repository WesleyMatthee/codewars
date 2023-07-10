/*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
*/

function noBoringZeros(n) {
	let numArray = n.toString().split('');
	while (numArray[numArray.length - 1] === '0') {
		numArray.pop();
	}
	return +numArray.join(''); //adding the + operator to the front converts a string to a number
}