function sumZero(arr) {
    let left = 0; 
    let right = arr.length - 1; 

    arr.sort((a,b) => a-b); 
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum > 0) {
            right--; 
        } else if (sum < 0) {
            left++; 
        } else {
            return [arr[i], arr[j]];
        }
    }
}