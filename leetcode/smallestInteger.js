// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


function solution(array) {
    // sort the array first
    array.sort((a, b) => a - b); 

    // filter out all the negative numbers 
    let result = array.filter((num => num >= 1));

    let smallest = 1; 

    for (let i=0; i<result.length; i++) {
        if (result[i] === smallest) {
            smallest += 1;
        }
    }

    return smallest; 
}

let A = [1, 3, 6, 4, 1, 2];
let B = [-1, -3];
let C = [1, 2, 3]

console.log('solution A answer: ' + solution(A))
console.log('solution B answer: ' + solution(B))
console.log('solution C answer: ' + solution(C))