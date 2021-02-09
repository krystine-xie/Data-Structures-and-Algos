function threeSum(nums) {
    let results = []; 

    if (nums.length < 3) {
        return results;
    }

    // sort the array of integers from low to high
    nums.sort((a, b) => a - b); 

    // iterate through nums array, minus the last two. 
    for (let i=0; i<nums.length - 2; i++) {
        // declare 1st pointer after index of i
        let j = i + 1; 

        // declare 2nd pointer at the end;
        let k = nums.length - 1; 

        // ensure no repeat of the first number of triplet
        if (i > 0 && nums[i] === nums[i-1]) {
            continue; 
        }

        if (nums[i] > 0) {
            return results;
        }

        // make sure the points don't cross midline
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]; 
            if (sum < 0) {
                // if sum is still negative, increase pointer one
                j++;
            } else if (sum > 0) {

                // if sum is still positive, decrease pointer two
                k--;
                
            } else {

                // if sum === 0 we push the triplets into the result array
                results.push([nums[i], nums[j], nums[k]]); 
                
                // ensure there's no repeat numbers
                while (nums[j] === nums[j+1]) {
                    j++;
                }

                while (nums[k] === nums[k-1]) {
                    k--; 
                }

                j++; 
                k--;
            }
        }
    }

    return results;
}

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([10, 11, 4, 3, 9]));
console.log(threeSum([3, -1, 0, -2, -5, 2, 6, -3, -3]))