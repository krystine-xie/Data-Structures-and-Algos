// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead. 

function minSubArrayLen(array, sum) {
    let total = 0;
    let start = 0;
    let end = 0; 
    let minLen = Infinity; 

    while (start < array.length) {
        if (total < sum && end < array.length) {
            total += array[end];
            end++; 
        } else if (total >= sum) {
            minLen = Math.min(minLen, end - start); 
            total -= array[start];
            start++;  
        } else {
            break; 
        }
    }

    return minLen === Infinity ? 0 : minLen;

}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 7))
console.log(minSubArrayLen([], 7))
console.log(minSubArrayLen([], 7))
console.log(minSubArrayLen([], 7))
console.log(minSubArrayLen([], 7))