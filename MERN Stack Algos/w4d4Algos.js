// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears.

// The maximum number of consecutive characters in a row is 9

// If final result is not shorter (such as "bb" => "b2" ),
// return the original string.

function stringEncode(str) {
    let count = {}; 
    let newString = ''; 

    for (let i=0; i<str.length; i++) {
        if (count[str[i]]) {
            count[str[i]]++; 
        } else {
            count[str[i]] = 1; 
        }
    }

    for (const letter in count) {
        newString += letter; 
        newString += count[letter];
    }

    return newString; 
}

// const str1 = "aaaabbcdddbbb";
// const expected1 = "a4b2c1d3b3";

// console.log(stringEncode(str1)); 

// "aaaaaaaaaaahhhhhhhhhhxxxxxxxxxiiiiiiiiikkkkkkklllllllppppppp"



const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";


// String Decode

function stringDecode(str) {
    let count = {}; 
    let newString = '';

    for (let i=0; i<str.length; i++) {
        if (i % 2 === 0) {
            count[str[i]] = str[i+1]
        }
    }

    for (const letter in count) {
        while (count[letter] > 0) {
            newString += letter;
            count[letter]--;
        }
    }

    console.log(count);

    return newString;
}

const str1 = "a3b2c1d3";
console.log(stringDecode(str1));

// const expected1 = "aaabbcddd";
