
// naive/brute force method
function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null; 
    }

    // account for all the numbers in array that may be negative?
    // O(n) => n2 NOT GOOD/efficient
    let max = -Infinity; 
    for (let i=0; i< arr.length - num + 1; i++) {
        let currentMax = 0; 
        for (let j=0; j < num; j++) {
            currentMax += arr[i + j]; 
        }

        if (currentMax > max) {
            max = currentMax;
        }
    }

    return max; 
}


// sliding window pattern
// O(n) ==> MUCH better in terms of efficiency
function maxSubarraySum2(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) {
        return null;
    }

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum; 
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum  - arr[i - num] + arr[i]; 
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum; 

}



console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 4], 2))
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 4], 4))