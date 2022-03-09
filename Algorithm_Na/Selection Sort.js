// Selection sort:
// A method which you loop through an array to find the smallest element.
// When found replace the most upfront element with the smallest element.
// Keep on looping through the element until everyting is in order

const unsortedArray = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

for (let i = 0; i < unsortedArray.length; i++) {
	let min = unsortedArray[i];
	let minIndex = i;
	
	for (let j = i; j < unsortedArray.length; j++) {
		if (unsortedArray[j] < min) {
			min = unsortedArray[j];
			minIndex = j;
		}
	}
	
	let temp = unsortedArray[i];
	unsortedArray[i] = min;
	unsortedArray[minIndex] = temp
	
}

console.log(unsortedArray)