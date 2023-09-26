/*
Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:
*/

class Warrior {
	constructor(name) {
		this.name = name;
		this.health = 100;
	}

	strike(enemy, swings) {
		enemy.health = Math.max(0, enemy.health - swings * 10);
	}
}

const ninja = new Warrior('Ninja');
const samurai = new Warrior('Samurai');

samurai.strike(ninja, 3);
console.log('Ninja health is,', ninja.health);
// ninja.health should == 70
