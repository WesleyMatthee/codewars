/*
Your job is to return the volume of a cup when given the diameter of the top, the diameter of the bottom and the height.

You know that there is a steady gradient from the top to the bottom.

You want to return the volume rounded to 2 decimal places.

Exmples:

cupVolume(1, 1, 1);
//returns 0.79

cupVolume(10, 8, 10);
//returns 638.79

cupVolume(1000, 1000, 1000);
//returns 785398163.4

cupVolume(13.123, 123.12, 1);
//returns 4436.57

cupVolume(5, 12, 31);
//returns 1858.51
*/

function cupVolume(d1, d2, height) {
	const dTop = d1 / 2;
	const dBottom = d2 / 2;
	const volume =
		(1 / 3) *
		Math.PI *
		height *
		(Math.pow(dTop, 2) + dTop * dBottom + Math.pow(dBottom, 2));
	return +volume.toFixed(2);
}
