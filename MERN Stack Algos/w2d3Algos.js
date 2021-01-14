// #1 Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 0-9 and it's missing a number, how do you find it?i

// given [3, 0, 1]
// return 2

// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6

function findMissingValue(arr) {
    let n = arr.length;
    let sumOfActual = n;
    let sumOfArr = 0;

    // actual sum
    for (let i=0; i<n; i++) {
        sumOfActual += i; 
        sumOfArr += arr[i];
    }

    let answer = sumOfActual - sumOfArr; 
    return answer; 

}

var testArr = [0,1,2];
console.log(findMissingValue(testArr)); // should print 6

// #2 Min of Sorted-Rotated

// You are given an an array of integers with a length of up to 255 thousand.
// This array has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value.

// Ninja Goal: Do this faster than 0(n) ie: find your answer without visiting every single element
// (think binary search)

// Given [17, 18, 3, 5, 6, 9, 10, 11, 12, 13]
// return 3

function minOfSorted(arr, low = 0, high = arr.length - 1) {
    for (let i=low; i<high; i++) {
        if (arr[i] > arr[i+1]) {
            return arr[i+1]
        }
    }

    return arr[0];
}

var testArr2 = [17, 18, 3, 5, 6, 9, 10, 11, 12, 13];
// console.log(minOfSorted(testArr2, low=0, high=testArr2.length-1)); 

function minOfSorted2(arr, low = 0, high = arr.length - 1) {
    if (low == high) {
        return arr[low];
    }
    let mid = Math.floor((high + low) / 2);
    console.log("Low: " + arr[low])
    console.log("Mid: " + arr[mid])
    console.log("High: " + arr[high])
    console.log("---------------")
    if (arr[mid - 1] > arr[mid]) {
        return arr[mid];
    }
    if (arr[low] > arr[mid]) {
        return minOfSorted2(arr, low, mid);
    } else {
        return minOfSorted2(arr, mid, high);
    }

    
    
}

console.log(minOfSorted2(testArr2, low=0, high=testArr2.length-1)); 