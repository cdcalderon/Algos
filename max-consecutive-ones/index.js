// --- Directions
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

function maxConsecutiveOnes(binaryArray) {
    let start = 0
    let end = 0
    let maxConsecutiveOnes = 0

    while (end < binaryArray.length) {
        if (binaryArray[end] === 0 || end === binaryArray.length - 1) {
            let currentMaxLength = 0
            if (end === binaryArray.length - 1) {
                currentMaxLength = end - start + 1
            } else {
                currentMaxLength = end - start
            }

            maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentMaxLength)
            end++
            start = end
            continue
        }
        end++
    }

    return maxConsecutiveOnes
}

module.exports = maxConsecutiveOnes
