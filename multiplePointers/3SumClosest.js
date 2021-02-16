function threeSumClosest(nums, target) {
    let closest = Infinity; 

    nums.sort((a,b) => a-b); 
    for (let i=0; i<nums.length-2; i++) {
        let a = nums[i]; 
        let j = i + 1; 
        let k = nums.length - 1; 
        
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]; 
            let difference = Math.abs(target-sum);  
            if (difference < closest) {
                closest = difference; 
            } 

            if (sum < target) {
                j++;
            } else if (sum > target) {
                k--;
            } else if (sum === target) {
                return target;
            }
        }
    }

    return closest;
}

console.log(threeSumClosest([-1,2,1,-4], 1)); 