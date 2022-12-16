const smallestDifference = require('./index')

test('function smallestDifference exists', () => {
    expect(typeof smallestDifference).toEqual('function')
})

test('Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero', () => {
    const arr1 = [-1, 5, 10, 20, 28, 3]
    const arr2 = [26, 134, 135, 15, 17]

    expect(smallestDifference(arr1, arr2)).toEqual([28, 26])
})
