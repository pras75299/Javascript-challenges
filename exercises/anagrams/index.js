// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* --------------------------------
// Solution 1

function anagrams(stringA, stringB) {
    const charMapStringA = buildCharMap(stringA);
    const charMapStringB = buildCharMap(stringB);

    if(Object.keys(charMapStringA).length !== Object.keys(charMapStringB).length){
        return false;
    }
    for(let char in charMapStringA){
        if(charMapStringA[char] !== charMapStringB[char]){
            return false;
        }
    }

    return true;
    
}

function buildCharMap(str) {
    const charMap = {};

    for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        if(charMap[char]) {
            charMap[char] += 1;
        } else {
            charMap[char] = 1
        }
    }
    return charMap;
}

*/

function anagrams(stringA, stringB){
    // const strA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort();
    // const strB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort();

    // if(strA === strB){
    //     return true
    // } else{
    //     return false
    // }
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

module.exports = anagrams;
