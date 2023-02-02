// --- Directions
/*
    You're given a list of integers nums. Write a function that returns a boolean
    representing whether there exists a zero-sum subarray of
    nums.
*/

function zeroSumSubarray(nums) {
    return zeroSumSubarray2(nums)
}

function zeroSumSubarray1(nums) {
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

function zeroSumSubarray2(nums) {
    const sortedNums = nums.sort((a, b) => a - b)
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        const currentSum = sortedNums[left] + sortedNums[right]

        if (currentSum === 0) {
            console.log('zero Sum -> : ', sortedNums[left], sortedNums[right])
            return true
        }

        if (currentSum > 0) {
            right--
        } else {
            left++
        }
    }
    return false
}

module.exports = zeroSumSubarray
