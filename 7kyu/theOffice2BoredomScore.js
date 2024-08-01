/* Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!' 
*/

function boredom(staff) {
	let jobs = Object.values(staff);
	let score = 0;

	for (let i = 0; i < jobs.length; i++) {
		if (jobs[i] == 'accounts') {
			score += 1;
		} else if (jobs[i] == 'finance') {
			score += 2;
		} else if (jobs[i] == 'canteen') {
			score += 10;
		} else if (jobs[i] == 'regulation') {
			score += 3;
		} else if (jobs[i] == 'trading' || jobs[i] == 'change') {
			score += 6;
		} else if (jobs[i] == 'IS') {
			score += 8;
		} else if (jobs[i] == 'retail') {
			score += 5;
		} else if (jobs[i] == 'cleaning') {
			score += 4;
		} else if (jobs[i] == 'pissing about') {
			score += 25;
		}
	}

	if (score <= 80) {
		return 'kill me now';
	} else if (score > 80 && score < 100) {
		return 'i can handle this';
	}
	return 'party time!!';
}

//TEST
describe('Example tests', () => {
	Test.assertEquals(
		boredom({
			tim: 'change',
			jim: 'accounts',
			randy: 'canteen',
			sandy: 'change',
			andy: 'change',
			katie: 'IS',
			laura: 'change',
			saajid: 'IS',
			alex: 'trading',
			john: 'accounts',
			mr: 'finance',
		}),
		'kill me now'
	);
	Test.assertEquals(
		boredom({
			tim: 'IS',
			jim: 'finance',
			randy: 'pissing about',
			sandy: 'cleaning',
			andy: 'cleaning',
			katie: 'cleaning',
			laura: 'pissing about',
			saajid: 'regulation',
			alex: 'regulation',
			john: 'accounts',
			mr: 'canteen',
		}),
		'i can handle this'
	);
	Test.assertEquals(
		boredom({
			tim: 'accounts',
			jim: 'accounts',
			randy: 'pissing about',
			sandy: 'finance',
			andy: 'change',
			katie: 'IS',
			laura: 'IS',
			saajid: 'canteen',
			alex: 'pissing about',
			john: 'retail',
			mr: 'pissing about',
		}),
		'party time!!'
	);
});
