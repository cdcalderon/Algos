// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function permutations(num) {
    // Convert the number to an array of digits
    let digits = num.toString().split('')

    // Find the index of the first digit that can be swapped with a larger digit
    let swapIndex = -1
    for (let i = digits.length - 1; i > 0; i--) {
        if (digits[i] > digits[i - 1]) {
            swapIndex = i - 1
            break
        }
    }

    // If no such digit is found, return -1
    if (swapIndex === -1) {
        return -1
    }

    // Find the smallest digit to the right of the swapIndex that is larger than the digit at swapIndex
    let smallestLargerIndex = swapIndex + 1
    for (let i = swapIndex + 2; i < digits.length; i++) {
        if (digits[i] > digits[swapIndex] && digits[i] < digits[smallestLargerIndex]) {
            smallestLargerIndex = i
        }
    }

    // Swap the digits at swapIndex and smallestLargerIndex
    let temp = digits[swapIndex]
    digits[swapIndex] = digits[smallestLargerIndex]
    digits[smallestLargerIndex] = temp

    // Sort the digits to the right of the swapIndex in ascending order
    let sortedDigits = digits.splice(swapIndex + 1)
    sortedDigits.sort()

    // Concatenate the sorted digits and the swapped digits to form the next number
    let nextNum = parseInt(digits.concat(sortedDigits).join(''))

    return nextNum.toString()
}

module.exports = permutations
