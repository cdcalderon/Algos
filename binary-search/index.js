// --- Directions
// We are given an array of integers, nums, sorted in ascending order,
// and an integer value, target. If the target exists in the array, return its index. If the target does not exist, then return -1.

// The binary search divides the input array by half at every step.
// After every step, either we find the index we are looking for,
// or we discard half of the array.

function binarySearch(nums, target) {
    let low = 0
    let high = nums.length - 1

    while (low <= high) {
        // Finding the mid using floor division
        let mid = low + Math.floor((high - low) / 2)

        //Target value is present at the middle of the array
        if (nums[mid] === target) {
            return mid
        }

        //Target value is present in the low subarray
        if (target < nums[mid]) {
            high = mid - 1
        }
        //Target value is present in the high subarray
        else {
            low = mid + 1
        }
    }
    // Target value is not present in the array
    return -1
}

module.exports = binarySearch
