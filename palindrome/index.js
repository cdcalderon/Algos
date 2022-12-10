// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return palindromeSolutionNoHelpers(str)
}

function palindromeSolution1(str) {
    const reversed = reverse(str)

    return str == reversed
}

function palindromeSolutionNoHelpers(str) {
    if (str.length === 1) {
        return true
    }
    //str = str.replace(/[^\w]/g, '').trim()
    // str = str.replace(/[^A-Za-z0-9 ]/g, '').trim()
    //str = str.split('').reverse().join('')
    let left = 0
    let right = str.length - 1

    while (left < right) {
        console.log('testcc ', left, right)
        if (str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

function reverse(inputString) {
    return inputString.split('').reverse().join('')
}

module.exports = palindrome
