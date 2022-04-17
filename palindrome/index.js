// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return palindromeSolution1(str)
}

function palindromeSolution1(str) {
    const reversed = reverse(str)

    return str == reversed
}

function reverse(inputString) {
    return inputString.split('').reverse().join('')
}

module.exports = palindrome
