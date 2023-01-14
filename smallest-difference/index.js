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

function smallestDifference(arrayOne, arrayTwo) {
    let sortedArrayOne = arrayOne.sort((a, b) => a - b)
    let sortedArrayTwo = arrayTwo.sort((a, b) => a - b)

    let idxOne = 0
    let idxTwo = 0
    let smallest = Infinity
    let currentSum = Infinity
    let smallestPair = []

    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
        let firstNumber = arrayOne[idxOne]
        let secondNumber = arrayTwo[idxTwo]
        if (firstNumber < secondNumber) {
            currentSum = secondNumber - firstNumber
            idxOne++
        } else if (secondNumber < firstNumber) {
            currentSum = firstNumber - secondNumber
            idxTwo++
        } else {
            return [firstNumber, secondNumber]
        }

        if (currentSum < smallest) {
            smallest = currentSum
            smallestPair = [firstNumber, secondNumber]
        }
    }
    return smallestPair
}

module.exports = smallestDifference
