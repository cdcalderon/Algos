// --- Directions
/*
    Given an array of integers between 1 and n, inclusive, where{' '}
    n is the length of the array, write a function that returns the first integer that
    appears more than once (when the array is read from left to right).
*/

function firstDuplicateValue(array) {
    let mapSeen = {}

    for (const n of array) {
        if (mapSeen[n]) {
            return n
        }
        mapSeen[n] = true
    }

    return -1
}

module.exports = firstDuplicateValue
