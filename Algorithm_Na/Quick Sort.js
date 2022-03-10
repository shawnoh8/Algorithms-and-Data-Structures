// Quick Sort:
// Main point of this method is using pivot.
// Find element bigger than the pivot from the left and
// finding element smaller than the pivot from the right.
// Then, switching both to make the array in ascending onder.

const unsortedArray = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
let initialIndex, finalIndex, i, j;

function quickSort(initialIndex, finalIndex, unsortedArray) {
    console.log(unsortedArray);
    if(initialIndex == finalIndex) {
        return;
    }

    let pivot = unsortedArray[initialIndex];
    let i = initialIndex + 1;
    let j = finalIndex;

    while(i <= j) {

        while (unsortedArray[i]<=pivot && i<finalIndex) {
            i++;
        }
        
        while (unsortedArray[j]>pivot && j>initialIndex) {
            j--;
        }
    
        if(i < j) {
            let temp = unsortedArray[i];
            unsortedArray[i] = unsortedArray[j];
            unsortedArray[j] = temp;
        } else {
            let temp = unsortedArray[initialIndex];
            unsortedArray[initialIndex] = unsortedArray[j];
            unsortedArray[j] = unsortedArray[initialIndex];
        }

    }
    console.log(unsortedArray);

    quickSort(initialIndex,j-1,unsortedArray);
    quickSort(j+1,finalIndex,unsortedArray);
}

function showSortedArray (unsortedArray) {
    quickSort(0, unsortedArray.length, unsortedArray);
    console.log(unsortedArray);
}

showSortedArray(unsortedArray);