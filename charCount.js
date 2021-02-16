// Write a function that keeps track of how many alpha-numeric characters appear

function charCount(str) {
    // create an object
    let letters = {}; 

    // lowercase the entire string first
    str = str.toLowerCase();

    // loop every character in our string 
    for (const char of str) {
        // if character is ALPHANUMERIC && already in object, add one to count
        let code = str.charCodeAt(i);
        if (/[a-z0-0]/.test(char)) {
            letters[char] = ++letters[char] || 1
        }
    }
    // return the object with keys that are lowercase alphnumeric characters
    return letters; 
    
}

console.log(charCount('hello')); 
console.log(charCount('hi there!')); 



