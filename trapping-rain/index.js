// --- Directions
// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

function trappingWater(nums) {
    return trappingWaterSolutionBruteForce(nums)
}

function trappingWaterSolution(nums) {}

function trappingWaterSolutionBruteForce(heights) {
    let totalWater = 0
    for (let p = 0; p < heights.length; p++) {
        let pLeft = p
        let pRight = p
        let maxLeft = 0
        let maxRight = 0

        while (pLeft >= 0) {
            maxLeft = Math.max(maxLeft, heights[pLeft])
            pLeft--
        }

        while (pRight < heights.length) {
            maxRight = Math.max(maxRight, heights[pRight])
            pRight++
        }

        const currenWater = Math.min(maxLeft, maxRight) - heights[p]

        if (currenWater >= 0) {
            totalWater += currenWater
        }
    }

    return totalWater
}

function getArea(a, b, idxa, idxb) {
    return Math.min(a, b) * (idxb - idxa)
}

module.exports = trappingWater
