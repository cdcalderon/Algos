// --- Directions
/*
    Write a function that takes in an array of integers and returns a boolean representing whether
    the array is monotonic.
*/

function monotonicArray(array) {
    return monotonicArraySolution(array)
}

function monotonicArraySolution(array) {
    if (array.length <= 2) {
        return true
    }
    let direction = array[1] - array[0]

    for (let i = 2; i < array.length; i++) {
        if (direction === 0) {
            direction = array[i] - array[i - 1]
            continue
        }

        if (breaksDirection(direction, array[i - 1], array[i])) {
            return false
        }
    }

    return true
}

function breaksDirection(direction, previousInt, currentInt) {
    let difference = currentInt - previousInt
    if (direction > 0) {
        return difference < 0
    }

    return difference > 0
}

module.exports = monotonicArray
