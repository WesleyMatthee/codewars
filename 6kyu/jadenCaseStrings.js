//Jaden Casing Strings

/*
Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

String.prototype.toJadenCase = function () {
	let words = this.split(' ');

	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toLocaleUpperCase() + words[i].slice(1);
	}
	return words.join(' ');
};
