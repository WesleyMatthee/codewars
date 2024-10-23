// Function that loops through two arrays and removes duplicates creating a new array of unique values
function hotSingles(arr1, arr2) {
	// Create a combined array of all elements
	const combined = [...arr1, ...arr2];

	// Filter the combined array for elements that appear only once
	const result = combined.filter(
		el =>
			(arr1.includes(el) && !arr2.includes(el)) ||
			(arr2.includes(el) && !arr1.includes(el))
	);

	// Remove any duplicates from the result
	return [...new Set(result)];
}
