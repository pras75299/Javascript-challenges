// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     let palindromStr = str.split('').reverse().join('');
//     if(str === palindromStr) {
//         return true;
//     } else {
//         return false;
//     }
// }


function palindrome(str) {
    const strSplits = str.split('').every((char, i) => {
        return (char === str[str.length - i - 1])
    })
    return strSplits
}


module.exports = palindrome;
