// --- Directions
/*
    Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one
    from each array) whose absolute difference is closest to zero, and returns an array containing
    these two numbers, with the number from the first array in the first position.
*/

function smallestDifference(arrayOne, arrayTwo) {
    arrayOne = arrayOne.sort((a, b) => a - b)
    arrayTwo = arrayTwo.sort((a, b) => a - b)
    let idx1 = 0
    let idx2 = 0
    let smallest = Infinity
    let current = Infinity
    let smallestPair = []

    while (idx1 < arrayOne.length && idx2 < arrayTwo.length) {
        let firstNumber = arrayOne[idx1]
        let secondNumber = arrayTwo[idx2]

        if (firstNumber < secondNumber) {
            current = secondNumber - firstNumber
            idx1++
        } else if (secondNumber < firstNumber) {
            current = firstNumber - secondNumber
            idx2++
        } else {
            return [firstNumber, secondNumber]
        }

        if (current < smallest) {
            smallest = current
            smallestPair = [firstNumber, secondNumber]
        }
    }

    return smallestPair
}

module.exports = smallestDifference
