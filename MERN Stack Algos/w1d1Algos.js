// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/


// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr) {
    // create a first for-loop
    for (let i=0; i<arr.length; i++) {

        // create a second for-loop
        for (let j=0; j<arr.length; j++) {

            // conditional: swap if arr[j] > arr[j+1]
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    
    // return sorted array
    return arr; 
}

let newArr = [45, 6, 23, 0, 1, 32, 3];

console.log(bubbleSort(newArr));


// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/



// Selection Sort


// Selection sort works by iterating through the list,
// finding the minimum value,
// and moving it to the beginning of the list.

// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.

function selectionSort(arr) {
    // create a first loop to iterate through the array
    for (let i=0; i<arr.length; i++) {
        // declare the min variable to beginning of the "second loop"
        let min = i;
        for (let j=i + 1; j<arr.length; j++) {
            // as you loop through the array, find the min value, and set the min to the new min value
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        // put the min value BACK to the beginning of the list if it is not 
        if (min !== i) {
            let temp = arr[j];
            arr[i] = arr[min];
            arr[min] = temp; 
        }
    }

    return arr; 

}

// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)

// https://www.programmingsimplified.com/images/c/selection-sort.png