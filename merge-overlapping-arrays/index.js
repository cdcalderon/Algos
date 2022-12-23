// --- Directions
/*
    Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping
    intervals, and returns the new intervals in no particular order.
*/

function mergeOverlappingIntervals(array) {
    // sort array
    array.sort((a, b) => a[0] - b[0])

    let recentlyMergedInterval = array[0]
    let mergedIntervals = [recentlyMergedInterval]

    for (let currentInterval of array) {
        let currentHigh = recentlyMergedInterval[1]
        let nextLow = currentInterval[0]
        let nextHigh = currentInterval[1]

        if (currentHigh >= nextLow) {
            // modify already added end interval;
            recentlyMergedInterval[1] = Math.max(currentHigh, nextHigh)
        } else {
            recentlyMergedInterval = currentInterval
            mergedIntervals.push(recentlyMergedInterval)
        }
    }
    return mergedIntervals
}

module.exports = mergeOverlappingIntervals
