// --- Directions
/*
  Write a function that takes in a non-empty array of integers and returns an
  array of the same length, where each element in the output array is equal to
  the product of every other number in the input array.
*/

function arrayOfProducts(array) {
    let resultProducts = new Array(array.length).fill(1)
    let leftProducts = new Array(array.length).fill(1)
    let rightProducts = new Array(array.length).fill(1)

    let i = 1
    let currentProduct = array[0]
    while (i < array.length) {
        leftProducts[i] = currentProduct
        currentProduct *= array[i]
        i++
    }

    i = array.length - 2
    currentProduct = array[array.length - 1]
    while (i >= 0) {
        rightProducts[i] = currentProduct
        currentProduct *= array[i]
        i--
    }

    for (let i = 0; i < array.length; i++) {
        resultProducts[i] = leftProducts[i] * rightProducts[i]
    }

    return resultProducts
}

module.exports = arrayOfProducts
