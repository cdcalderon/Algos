// --- Directions
/*
    You're given a list of integers nums. Write a function that returns a boolean
    representing whether there exists a zero-sum subarray of
    nums.
*/

function zeroSumSubarray(nums) {
    const sums = new Set([0])
    let currentSum = 0

    for (const num of nums) {
        currentSum += num
        if (sums.has(currentSum)) {
            return true
        }
        sums.add(currentSum)
    }

    return false
}

module.exports = zeroSumSubarray
