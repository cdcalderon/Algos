// --- Directions
/*Write a function that takes in a 
  non-empty string and returns its run-length encoding.
*/

function runLengthEncoding(string) {
    let currentRunLength = 1
    let encodedCharactersArray = []

    for (let i = 1; i < string.length; i++) {
        const currentCharacter = string[i]
        const previousCharacter = string[i - 1]

        if (currentCharacter !== previousCharacter || currentRunLength === 9) {
            encodedCharactersArray.push(`${currentRunLength}${previousCharacter}`)
            currentRunLength = 0
        }

        currentRunLength++
    }

    encodedCharactersArray.push(`${currentRunLength}${string[string.length - 1]}`)
    return encodedCharactersArray.join('')
}

module.exports = runLengthEncoding
