function swap(arr, index1, index2) {
    let temp = arr[index1]; 
    arr[index1] = arr[index2];
    arr[index2] = temp; 
}

function bubbleSort(arr) {
    let noSwaps; 
    for (let i=arr.length; i>0; i--) {
        noSwaps = true;
        for (let j=0; j < i-1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }

    return arr;
}


console.log(bubbleSort([2, 56, 34, 12, 4, 55, -7]));