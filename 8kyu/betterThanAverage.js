/*There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false! */

function betterThanAverage(classPoints, yourPoints) {
	let classTotal = 0;
	for (let i = 0; i < classPoints.length; i++) {
		classTotal += classPoints[i];
	}
	let classAve = classTotal / classPoints.length;
	return yourPoints > classAve ? true : false;
}
