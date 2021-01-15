/* *1189. Maximum Number of Balloons
 * Given a string text you want to use the characters of
 * text to form as many instances of the word "balloon" as possible.
 *
 * You can use each character in text at most once.
 * Return the maximum number of instances that can be formed.
 *
 * Example 1:
 * Input: text = "
 * "
 * Output: 1
 *
 * Example 2:
 * Input: text = "loonbalxballpoon"
 * Output: 2
 *
 * Example 3:
 * Input: text = "leetcode"
 * Output: 0
 * @param {string} text
 * @return {number}
 */


// var x = "CodingDojo";


// console.log(x[0]); // C

// console.log(x[x.length-1]); // o

// x[0] = "c";


// for(var i = 0; i < x.length; i++){
//     console.log(x[i]);
// }

// let y = {};

// y[key] = value;

// {key: value}

function maxNumOfBalloons(text) {
    // declare variable for answer
    let answer = 0; 

    // create a dictionary/object to collect the no. of letters
    let collection = {};

    // loop through string to add letters into dict
    for (var i = 0; i<text.length; i++) {

        // if letter doesn't exist, set value of letter to 1
        if (!collection[text[i]]) {
            collection[text[i]] = 1;
            // else increment by 1
        } else if (collection[text[i]] >= 1) {
            collection[text[i]]++; 
        }
    }

    console.log(collection)


    if (collection.l >=2 && collection.o >=2) {
        while (collection.b !== 0 && collection.a !==0 && collection.l >=2 && collection.o >=2 && collection.n !== 0) {
            collection.b--;
            collection.a--;
            collection.l -= 2;
            collection.o -= 2;
            collection.n--;
            answer++;
        }
    }

    return answer;
}

let text1 = "nlaebolko"; 
let text2 = "loonbalxballpoon"
let text3 = "leetcode"
console.log(maxNumOfBalloons(text1));
console.log(maxNumOfBalloons(text2));
console.log(maxNumOfBalloons(text3));

// BRENDAN'S SOLUTION
function maxNumOfBalloons2(text, word = "balloon") {
    if (text.length < word.length) { 
        return 0; 
    }

    let count = Infinity;
    let wordDict = {};
    let textDict = {};

    for (let letter of word) {
        wordDict.hasOwnProperty(letter) ? wordDict[letter]++ : wordDict[letter] = 1; 
    }

    for (let letter of text) {
        textDict.hasOwnProperty(letter) ? textDict[letter]++ : textDict[letter] = 1;
    }

    for (let key of Object.keys(wordDict)) {
        let newAmount = Math.floor(textDict[key] / wordDict[key]);
        if (count > newAmount) {
            count = newAmount
        }
    }

    return count;

}