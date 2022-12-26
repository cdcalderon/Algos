const arrayOfProducts = require('./index')

test('arrayOfProducts is a function', () => {
    expect(typeof arrayOfProducts).toEqual('function')
})

test(`'Write a function that takes in a non-empty array [5, 1, 4, 2] of integers and returns an array of the same length,
 where each element in the output array [8, 40, 10, 20] is equal to the product of every other number in the input array.`, () => {
    expect(arrayOfProducts([5, 1, 4, 2])).toEqual([8, 40, 10, 20])
})

test(`'Write a function that takes in a non-empty array [1, 8, 6, 2, 4] of integers and returns an array of the same length,
 where each element in the output array [384, 48, 64, 192, 96] is equal to the product of every other number in the input array.`, () => {
    expect(arrayOfProducts([1, 8, 6, 2, 4])).toEqual([384, 48, 64, 192, 96])
})
