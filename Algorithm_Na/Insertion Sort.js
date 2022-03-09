//Insertion Sort:
//Method which loops through an array and brings element to it's appropriate position.
//Small element far behind slowly gets pulled into the front of the array.

const unsortedArray = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

for (let i=0; i<unsortedArray.length-1; i++) {
    
    let j=i
    while (j>=0 && unsortedArray[j] > unsortedArray[j+1]) {
        let temp = unsortedArray[j];
        unsortedArray[j] = unsortedArray[j+1];
        unsortedArray[j+1] = temp
        j--
    }

}

console.log(unsortedArray)