
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSums(nums, target) {
    let answer = []; 

    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                answer = [i, j];
            } 
        }
    }

    return answer; 
}

console.log(twoSums([2,7,11,15], 9));

console.log(twoSums([3, 2, 4], 6));
console.log(twoSums([3, 3], 6));