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
    let results = [];

    function create(l, r, string='') {
        if (!l && !r && string.length) {
            results.push(string);
        } 
        
        if (l) {
            create(l - 1, r, string + '(')
        } else if (l < r) {
            create(l, r-1, string + ')')
        }

    }

    create(num, num, ''); 
    return results; 
}

console.log(parentheses(1))
console.log(parentheses(2))
console.log(parentheses(3))
