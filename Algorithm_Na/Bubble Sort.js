// Bubble sort:
// A method which you compare element with one behind itself
// and exchanging indexes if former is bigger making the biggest go to behind.
// Exchanges happen a lot compared to selection sort

const unsortedArray = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

for (let i=0; i<unsortedArray.length; i++) {
    for (let j=0; j<unsortedArray.length-1; j++) {
        if (unsortedArray[j] > unsortedArray[j+1]) {
            let temp = unsortedArray[j];
            unsortedArray[j] = unsortedArray[j+1];
            unsortedArray[j+1] = temp;
        }
    }
}
console.log(unsortedArray)