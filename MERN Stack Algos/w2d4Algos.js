// https://leetcode.com/problems/two-sum/

const twoSums = (nums, target) => {
    let indexArr = [];
    for (let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                indexArr.push(i, j)
            }
        }
    }
    
    return indexArr; 

};

console.log(twoSums([2, 11, 7, 15], 9));
// 

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// the array is unsorted, no floats, and there may be duplicates

// [5, 5, 6]
// 10
// [0, 1]

// Given nums = [2, 11, 7, 15], target = 9,

const twoSums2 = (nums, target) => {
    let idx1 = 0;
    let idx2 = 1; 
    const output = [];
    while (idx1 !== idx1.length) {
        if (nums[idx1] + nums[idx2] === target) {
            output.push(idx1);
            output.push(idx2);
            return output
        } else if (idx2 === nums.length) {
            idx1++;
            idx2 = idx + 1;
        } else {
            idx2++;
        }
    }
};

console.log(twoSums([2,11,7,15], 9))
// Because nums[0] + nums[2] = 2 + 7 = 9,
// return [0, 2].
// Because nums[0] + nums[2] = 2 + 7 = 9,
// return [0, 2].
// Because nums[0] + nums[2] = 2 + 7 = 9,
// return [0, 2].
