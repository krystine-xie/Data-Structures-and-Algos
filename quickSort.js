function pivot(array, startIndex=0, endIndex=array.length-1) {
    let pivot = array[startIndex]; 
    let indexToSwap = startIndex;

    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    for (let i=startIndex + 1; i<array.length; i++) {
        if (pivot > array[i]) {
            indexToSwap++; 
            swap(array, indexToSwap, i);
            console.log(array);
        } 
    }

    let newSwap = array[indexToSwap]; 
    array[indexToSwap] = pivot; 
    array[startIndex] = newSwap;
    console.log(array);

    return indexToSwap;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

function quickSort(arr, left=0, right=arr.length-1) {
    let pivotIndex = pivot(arr, left, right); 


    if (left < right) {
        // recursively call it for LEFT subarray
        quickSort(arr, left, pivotIndex-1);

        // recursively call it for the RIGHT subarray
        quickSort(arr, pivotIndex+1, right);
    }

    return arr;
}