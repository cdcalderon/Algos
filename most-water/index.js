// --- Directions
//You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

//Find two lines that together with the x-axis form a container, such that the container contains the most water..

//Return the maximum amount of water a container can store.

function mostWater(nums) {
    return mostWaterSolutionOne(nums)
}

function mostWaterSolutionOne(nums) {
    let maxValue = 0
    for (let a = 0; a < nums.length; a++) {
        for (let b = 1; b < nums.length; b++) {
            const newArea = getArea(nums[a], nums[b], a, b)

            maxValue = Math.max(maxValue, newArea)
            console.log(maxValue)
        }
    }

    return maxValue
}

function getArea(a, b, idxa, idxb) {
    return Math.min(a, b) * (idxb - idxa)
}

module.exports = mostWater
