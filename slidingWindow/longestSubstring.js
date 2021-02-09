function longestSubstring(string) {
    let longestString = ''; 
    let currentString = ''; 

    for (let i=0; i<string.length; i++) {
        let char = string[i]; 
        let index = currentString.indexOf(char); 
        if (index > -1) {
            if (currentString > longestString) {
                longestString = currentString;
            } 

            currentString = currentString.slice(index + 1) + char;
        } else {
            currentString += char; 
        }
    } 

    if (currentString > longestString) {
        longestString = currentString;
    }

    return longestString.length; 
}

console.log(longestSubstring("helloworld"));