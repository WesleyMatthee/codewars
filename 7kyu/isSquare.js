// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.;

const isSquare = function(n) {
  // create new var integer; Math.floor random parameter(n); get the sqrt of parameter(n).
  const num = Math.floor(Math.sqrt(n));
  if (num * num !== n) { //Always test for false (unhappy path).
    return false;
  } else {
    return true;
  }
};