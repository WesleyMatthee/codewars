/*
Create a parser to interpret and execute the Deadfish language.

Deadfish operates on a single value in memory, which is initially set to 0.

It uses four single-character commands:

i: Increment the value
d: Decrement the value
s: Square the value
o: Output the value to a result array
All other instructions are no-ops and have no effect.

Examples
Program "iiisdoso" should return numbers [8, 64].
Program "iiisdosodddddiso" should return numbers [8, 64, 3600].
*/

//Function
function parse(data) {
	let result = [];
	let arr = data.split('');
	let val = 0;

	arr.forEach(el => {
		if (el === 'i') {
			val += 1;
		} else if (el === 'd') {
			val -= 1;
		} else if (el === 's') {
			val = Math.pow(val, 2);
		} else if (el === 'o') {
			result.push(val);
		}
	});

	return result;
}

//Test
/*
const { assert } = require('chai');

describe("Example test", () => {
  it("parse('iiisxxxdoso') should return [8, 64]", () => {
    assert.deepEqual(parse("iiisxxxdoso"), [ 8, 64 ]);
  });
});
*/
