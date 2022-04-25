// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return anagramsSolutionTwo(stringA, stringB)
}

function anagramsSolutionOne(stringA, stringB) {
    let stringACharMap = buildCharMap(stringA)
    let stringBCharMap = buildCharMap(stringB)

    if (Object.keys(stringACharMap).length !== Object.keys(stringBCharMap).length) {
        return false
    }

    for (let char in stringACharMap) {
        if (stringACharMap[char] !== stringBCharMap[char]) {
            return false
        }
    }

    return true
}

function anagramsSolutionTwo(stringA, stringB) {
    return cleanAndFormatString(stringA) === cleanAndFormatString(stringB)
}

// utiliti
function cleanAndFormatString(str) {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join('')
}

function buildCharMap(str) {
    let charMap = {}
    for (let char of str.replace(/[^\w]/g).toLowerCase()) {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    return charMap
}

module.exports = anagrams
