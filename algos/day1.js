///Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2: 
// Input: n = 2
// Output: ["(())", "()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]



function parentheses(num) {
    if(num === 0){
        return 0;
    }
    // create array to return
    let answer = []; 
    // let stop = true;
    // string length = num * 2
    let str = ''; 

    function helper(str, num) {
        let paren = "()"
        // let char = "";
        if (str.length<num*2) {
            for (let i = 0; i < paren.length; i++){
                console.log(paren[i])
                str += paren[i];
                helper(str, num)
            }
        } else {
            if (str[0] === ")" || str[str.length-1] === "(") {
                
            } else {
                let validator = 0;
                for (let char of str) {
                    if (char === "(") {
                        validator += 1
                    }
                    
                    else {
                        validator -= 1
                    }
                }
                if (validator === 0) {
                    answer.push(str)
                }
            }
        }
        
    } 
    helper(str, num)
    return answer; 
}

console.log(parentheses(1))
console.log(parentheses(2))
// console.log(parentheses(3))
// console.log(parentheses(0))



var all = [];

function parens(left, right, str) {

  // if no more brackets can be added then add the final balanced string
    if (left === 0 && right === 0) {
        all.push(str);
    }

  // if we have a left bracket left we add it
    if (left > 0) {
        parens(left-1, right+1, str+"(");
    }

  // if we have a right bracket left we add it
    if (right > 0) {
        parens(left, right-1, str+")"); 
    }

}

// the parameters parens(x, y, z) specify:
// x: left brackets to start adding
// y: right brackets we can add only after adding a left bracket
// z: the string so far
parens(3, 0, "");
console.log(all); 