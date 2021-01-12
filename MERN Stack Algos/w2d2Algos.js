// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// findConsqSums([2,5,3,6,7,0,0,23,11], 16)

// O(n2)

// inputs
// k = 16
// arr = [2,5,3,6,7,0,0,23,11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ]

function findConsqSums(arr, k) {
    // create array for final output 
    let answers = []; 

    // loop through the array
    for (let i=0; i<arr.length; i++) {

        // create a variable for the rolling sum
        let rollingSum = 0;
        // create array for all the conseq nums of the sum
        let conseqNums = [];

        // create a current value variable
        let current = i; 

        // while the sum is less/equal to the value k, and the current is less than the length of array
        while (rollingSum <= k && current < arr.length) {

            if (rollingSum + arr[current] < k) {

            // add the current element to the sum
                rollingSum += arr[current];

            // push the element into the conseq nums array
                conseqNums.push(arr[current])

            // move onto the next index
                current++; 

            // once sum 
                if (sum === k) {
                    answers.push(conseqNums);
                }
            } else {
                break;
            }
        
        } 

    }

    return answers; 
}