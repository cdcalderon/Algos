const arrayOfProducts = require('./index')

test('arrayOfProducts is a function', () => {
    expect(typeof arrayOfProducts).toEqual('function')
})

test(`'Write a function that takes in a non-empty array of integers and returns an array of the same length,
 where each element in the output array is equal to the product of every other number in the input array.`, () => {
    expect(arrayOfProducts([5, 1, 4, 2])).toEqual([8, 40, 10, 20])
})
