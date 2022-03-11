// Quick Sort:
// Main point of this method is using pivot.
// Find element bigger than the pivot from the left and
// finding element smaller than the pivot from the right.
// Then, switching both to make the array in ascending onder.

const unsortedArray = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
let initialIndex, finalIndex, i, j;

function quickSort(initialIndex, finalIndex, unsortedArray) {
    if(initialIndex >= finalIndex) {
        return unsortedArray;
    }

    let key = initialIndex;
    let i = initialIndex + 1;
    let j = finalIndex;

    while(i <= j) {

        while (i<=finalIndex && unsortedArray[i]<=unsortedArray[key]) {
            i++;
        }

        while (j>initialIndex && unsortedArray[j]>=unsortedArray[key]) {
            j--;
        }
    
        if(i > j) {
            let temp = unsortedArray[initialIndex];
            unsortedArray[initialIndex] = unsortedArray[j];
            unsortedArray[j] = temp;
        } else {
            let temp = unsortedArray[i];
            unsortedArray[i] = unsortedArray[j];
            unsortedArray[j] = temp;
        }
        
    }
    console.log(unsortedArray);
    quickSort(initialIndex,j-1,unsortedArray);
    quickSort(j+1,finalIndex,unsortedArray);
    return unsortedArray
}

function showSortedArray (unsortedArray) {
    quickSort(0, unsortedArray.length-1, unsortedArray);
    console.log(unsortedArray);
}

showSortedArray(unsortedArray);

// Stackoverflow helped : https://stackoverflow.com/questions/71426308/trying-to-write-quick-sort-algorithm-without-making-2-new-lists-and-appending-c
// Learned : at line 21, if you compare the value of array first instead of verifying index is not out of bounds
// you could get an error. Therefore, needs to compare index first. 