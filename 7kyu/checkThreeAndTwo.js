/*Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"*/

function checkThreeAndTwo(array) {
	let aCount = 0;
	let bCount = 0;
	let cCount = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] === 'a') {
			aCount += 1;
		} else if (array[i] === 'b') {
			bCount += 1;
		}
		if (array[i] === 'c') {
			cCount += 1;
		}
	}
	if (
		(aCount === 2 && aCount + bCount === 5) ||
		(bCount === 2 && aCount + bCount === 5) ||
		(bCount === 2 && bCount + cCount === 5) ||
		(cCount === 2 && bCount + cCount === 5) ||
		(aCount === 2 && aCount + cCount === 5) ||
		(cCount === 2 && aCount + cCount === 5)
	) {
		return true;
	}
	return false;
}
