//Remove String Spaces
/*
Write a function that removes all the white spaces in a string.
*/

function noSpace(x) {
	//This also works
	//let result = x.split(' ').join('');

	let result = x.replaceAll(' ', '');
	return result;
}

//Vanilla javascript
function noSpace(x) {
	var result = '';
	for (var index = 0; index < x.length; index++) {
		if (x[index] !== ' ') {
			result += x[index];
		}
	}
	return result;
}
