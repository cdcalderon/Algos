// --- Directions
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

function maxConsecutiveOnes(anyNumberArray) {
    let start = 0
    let end = 0
    let maxConsecutiveOnes = 0

    while (end < anyNumberArray.length) {
        if (anyNumberArray[end] !== 1 || end === anyNumberArray.length - 1) {
            let currentMaxLength = 0
            if (end === anyNumberArray.length - 1) {
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

// This works just with 0s and 1s
// function findMaxConsecutiveOnes(binaryArray) {
//     let maxConsecutiveOnes = 0;
//     let currentConsecutiveOnes = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 1) {
//             currentConsecutiveOnes++;
//         } else {
//             maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentConsecutiveOnes);
//             currentConsecutiveOnes = 0;
//         }
//     }

//     return Math.max(maxConsecutiveOnes, currentConsecutiveOnes);
// }

module.exports = maxConsecutiveOnes
