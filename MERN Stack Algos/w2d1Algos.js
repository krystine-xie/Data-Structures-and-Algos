// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped (without duplicates).

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]

function intersection(arr1, arr2) {
    let i = 0;
    let j = 0; 

    let len1 = arr1.length;
    let len2 = arr2.length; 

    let results = []; 

    while (i < len1 && j < len2) {
        // walk the smaller value forward
        if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr1[j] > arr2[j]) {
            j++;
            // if they're equal
        } else {
            // check if results already have duplicates
            if (result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            } else {
                i++;
                j++;
            }
        }
    }

    return results;
}



// arrays are always sorted
// arrays may be different length
// all values will be positive integers

{
// inputs are always to be sorted
// not the same length
// negative numbers? no
// output has to be sorted? yes
// space constraints (return a new array)
// no speed constraints ( ideal O(n) )
// can the arrays be empty? yes
// can the arrays have floats or doubles? no, always integers
// fail case: empty array
}