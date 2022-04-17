// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    return parseInt(reverse(n.toString())) * Math.sign(n)
}

function reverse(inputString) {
    return inputString.split('').reverse().join('')
}

module.exports = reverseInt
