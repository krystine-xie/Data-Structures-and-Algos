/*
  https://leetcode.com/problems/backspace-string-compare/

  BACKSPACE STRING COMPARE

  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.

  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time

  // ab#c
  // ac


  Examples:
  Input: S = "ab#c", T = "ad#c"
  Output: true
  Explanation: Both S and T become "ac"

  Input: S = "ab##", T = "c#d#"
  Output: true
  Explanation: Both S and T become ""

  Input: S = "a##c", T = "#a#c"
  Output: true
  Explanation: Both S and T become "c"
*/

// let S = "ab#c";
// let T = "ad#c";
// let S = "ab##";
// let T = "c#d#";
let S = "a##c";
let T = "#a#c";


function backspaceCompare(S, T) {
    if (S === T) {
        return true;
    }

    return false; 
}

function backspace(S, T) { 
    let newS = '';
    let newT = ''; 
    for (let i=0; i<S.length; i++) {
      // console.log('at i', i)
        if (S[i] === '#' || S[i+1] === '#') {
          // console.log('this is #', S[i])
            S[i++];
        } else {
            newS += S[i];
        }
    
        console.log('ending newS = ', newS);
    }

    for (let j=0; j<T.length; j++) {
        if (T[j] === '#' || T[j+1] === '#') {
            T[j++];
        } else {
            newT += T[j];
        }
    }

    console.log('ending newT = ', newT);

    // return newS, newT
    return backspaceCompare(newS, newT);
}

console.log(backspace2(S, T));

function backspace2(S, T) {
    let newS = S.split('');  // ['a','#','#','c']
    let newT = T.split(''); 

    console.log('starting newS', newS)
    
    for (let i=0; i<S.length; i++) {
      console.log(newS[i]);
      if (S[i] === '#') {
        newS.pop()
        newS.pop()
      }
      
    }
    
    console.log('ENDING newS', newS)

    
}

function backspaceCompare(S, T) {
  if (backspaceProcess(S) == backspaceProcess(T)) {
    return true;
  }
  return false;
}

function backspaceProcess(inputStr) {
  processedStr="";
  for (i=0; i<inputStr.length; i++) {
    if(inputStr[i+1] != "#" && inputStr[i] != "#") {
      processedStr += inputStr[i];
      console.log("pushed",inputStr[i], processedStr)
    }        
  }
}

/*
    CAN STRING ONE BE MADE FROM STRING TWO

    Given two strings,
    return true if the first string can be built from the letters in the 2nd string

    Ignore case

    Input: "Hello World", "lloeh wordl"
    Output: true

    Input: "Hey", "hello"
    Output: false, second string is missing a "y"

    Input: "hello", "helo"
    Output: false, second string doesn't have enough "l" letters
 */

function canBuildS1FromS2(neededStr, availableStr) {}