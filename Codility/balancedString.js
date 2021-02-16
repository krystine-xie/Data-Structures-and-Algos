// A string is called balanced when every letter occurring in the string, appears both in upper- and lowercase. 

// For example, the string "CATattac" is balanced ('a', 'c' and 't' occur in both cases), but "Madam" is not ('d' and 'a' appear only in lowercase). 
// Note that the number of occurrences does not matter. Write a function: def solution(s) that, given a string S of length N, returns the length of the shortest balanced fragment of S. 

// If S does not contain any balanced fragments, the function should return -1. 
// Examples: 
// 1. Given S = "ZABaabza", the function should return 5. The shortest balanced fragment of S is "ABaab". 
// 2. Given S = "TacoCat", the function should return -1. There is no balanced fragment. 
// 3. Given S = "AcZCbaBz", the function should return 8. The shortest balanced fragment is the whole string. 
// 4. Given S = "abcdefghijklmnopqrstuvwxyz", the function should return -1. Assume that: • Nis an integer within the range [1..200); • string S consists only of letters ('a'-'z' and/or 'A'-'Z').


// using a sliding window pattern + multiple pointers
// leverage .toUpperCase or .toLowerCase and .indexOf methods

// can use recursion?? 




function solution(str) {
    let map = {}; 
    let shortestStr = '';  
    let slow = 0;

    for (let i=0; i<str.length; i++) {
        let letter = str[i]; 
        map[letter] = ++map[letter] || 1;
        
        if (letter === letter.toLowerCase()) {
            if (map[letter] === undefined || map[letter] === 0) {

            }
        }

        
    }



    console.log(map);
   
}

console.log(solution("ZABaabza"));
console.log(solution("TacoCat"));





