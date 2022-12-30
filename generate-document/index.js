// --- Directions
/*
  You're given a string of available characters and a string representing a
  document that you need to generate. Write a function that determines if you
  can generate the document using the available characters. If you can generate
  the document, your function should return <span>true</span>; otherwise, it
  should return false.
*/

function generateDocument(characters, document) {
    let charactersMap = getMapChars(characters)
    let documentMap = getMapChars(document)

    for (let key in documentMap) {
        let charsCount = charactersMap[key]
        let docsCount = documentMap[key]

        if (!charsCount || docsCount > charsCount) return false
    }
    return true
}

function getMapChars(characters) {
    let mapArray = {}

    for (let i = 0; i < characters.length; i++) {
        if (!mapArray[characters[i]]) {
            mapArray[characters[i]] = 1
        } else {
            mapArray[characters[i]]++
        }
    }
    return mapArray
}

module.exports = generateDocument
