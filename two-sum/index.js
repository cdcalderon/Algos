// --- Directions
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

function twoSum(nums, target) {
    return twoSumSolutionTwo(nums, target)
}

function twoSumSolutionTwo(nums, target) {
    for (let p1 = 0; p1 < nums.length; p1++) {
        const numberToFind = target - nums[p1]
        for (let p2 = 1; p2 < nums.length; p2++) {
            if (numberToFind === nums[p2]) {
                return [p1, p2]
            }
        }
    }

    return null
}

function twoSumSolutionOne(nums, target) {
    const numsMap = {}

    for (let p = 0; p < nums.length; p++) {
        const currentMapValue = numsMap[nums[p]]

        if (currentMapValue >= 0) {
            return [currentMapValue, p]
        } else {
            const numberToFind = target - nums[p]
            numsMap[numberToFind] = p
        }
    }

    return null
}

module.exports = twoSum
