// --- Directions
// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

function trappingWater(nums) {
    return trappingWaterSolutionBruteForce(nums)
}

function trappingWaterSolution(nums) {}

function trappingWaterSolutionBruteForce(nums) {}

function getArea(a, b, idxa, idxb) {
    return Math.min(a, b) * (idxb - idxa)
}

module.exports = mostWater
