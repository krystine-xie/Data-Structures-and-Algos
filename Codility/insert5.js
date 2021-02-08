// Write a function solution that, given an integer N, returns the maximum possible value obtained by inserting one '5' digit inside the decimal representation of integer N. 
    
// Examples: 
// 1. Given N = 268, the function should return 5268.
// 2. Given N = 670, the function should return 6750. 
// 3. Given N = 0, the function should return 50. 
// 4. Given N = -999, the function should return -5999. 
    
// Assume that: N is an integer within the range (-8,000..8,000).

// N = 4, 6
// N= - 4, 6
// N = 0

function solution(N) {
    let array = Math.abs(N).toString().split(''); 

    let arrayInt = []; 
    for (let i=0; i<array.length; i++) {
        arrayInt.push(parseInt(array[i])); 
    }

    let result = []; 
    let found = false; 

    for (let j=0; j<arrayInt.length; j++) {
        if ((N >= 0 && arrayInt[j] > 5) || (N < 0 && arrayInt[j] < 5)) {
            result.push(arrayInt[j])
        } else {
            result.push(5);
            found = true; 
            for (let k=j; k<arrayInt.length; k++) {
                result.push(arrayInt[k])
            }
            break;
        }
    }

    if (!found) {
        result.push(5)
    }

    return N >= 0 ? parseInt(result.join('')) : parseInt(result.join('') * -1) ;
}

function solution1(N) {
    let array = Math.abs(N).toString().split(''); 

    let arrayInt = []; 
    for (let i=0; i<array.length; i++) {
        arrayInt.push(parseInt(array[i])); 
    }

    let result = []; 
    let found = false; 

    if (N >= 0) {
        for (let j=0; j<arrayInt.length; j++) {
            if (arrayInt[j] > 5) {
                result.push(arrayInt[j])
            } else {
                result.push(5);
                found = true; 
                for (let k=j; k<arrayInt.length; k++) {
                    result.push(arrayInt[k])
                }
                break;
            }
        }
    
        if (!found) {
            result.push(5)
        }
    } else {
        for (let j=0; j<arrayInt.length; j++) {
            if (arrayInt[j] < 5) {
                result.push(arrayInt[j])
            } else {
                result.push(5);
                found = true; 
                for (let k=j; k<arrayInt.length; k++) {
                    result.push(arrayInt[k])
                }
                break;
            }
        }
    
        if (!found) {
            result.push(5)
        }
    }

    return N >= 0 ? parseInt(result.join('')) : parseInt(result.join('') * -1) ;
}   

console.log(solution(268)); 
console.log(solution(670)); 
console.log(solution(0)); 
console.log(solution(-999));
console.log(solution(-1234)); 