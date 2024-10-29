/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/

//Function
function solve(str) {
	let string = str.split('');
	let upper = 0;
	let lower = 0;
	string.forEach(el => {
		if (el === el.toUpperCase()) {
			upper++;
		} else {
			lower++;
		}
	});
	return upper <= lower ? str.toLowerCase() : str.toUpperCase();
}

console.log(solve('Code'), '--> code');
console.log(solve('CODe'), '--> CODE');
console.log(solve('COde'), '--> code');
console.log(solve('Hello, World!'), '--> hello world!');

/* //TEST CASE
const assert = require("chai").assert;

describe("Basic tests", function() {
  it("solve('code') should return 'code'", function() {
    assert.strictEqual(solve("code"), "code");
  });
  
  it("solve('CODe') should return 'CODE'", function() {
    assert.strictEqual(solve("CODe"), "CODE");
  });
  
  it("solve('COde') should return 'code'", function() {
    assert.strictEqual(solve("COde"), "code");
  });
  
  it("solve('Code') should return 'code'", function() {
    assert.strictEqual(solve("Code"), "code");
  });
});

*/
