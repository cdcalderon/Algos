// --- Directions
/*
    Given a non-empty string of lowercase letters and a non-negative integer representing a key,
    write a function that returns a new string obtained by shifting every letter in the input string
    by k positions in the alphabet, where k is the key.
*/

function caesarCipherEncryptor(text, key) {
    const alphabet = 'abcdefghijklmnopkrstuvwxyz'.split('') // 26
    const alphabetLength = alphabet.length
    const newIndex = key % alphabetLength
    const newTextArray = []

    for (const letter of text) {
        const newLetterCode = alphabet.indexOf(letter) + key
        const newLetter = alphabet[newLetterCode % alphabetLength]
        newTextArray.push(newLetter)
    }

    return newTextArray.join('')
}

module.exports = caesarCipherEncryptor
