// --- Directions
// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

function duplicateZeros(arr) {
    const length = arr.length - 1
    let w = length

    for (let r = length - getNumberOfZeros(arr); r >= 0; r--) {
        if (arr[r] === 0) {
            arr[w] = 0
            w--
            arr[w] = 0
        } else {
            arr[w] = arr[r]
        }
        w--
    }
    console.log(`carlos -- > ${arr}`)
    return arr
}

function getNumberOfZeros(arr) {
    let zerosCount = 0
    for (let i = 0; i < arr.length - zerosCount; i++) {
        if (arr[i] === 0) {
            zerosCount++
        }
    }
    return zerosCount
}

module.exports = duplicateZeros
