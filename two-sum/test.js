const twoSum = require('./index')

test('TwoSum is a function', () => {
    expect(typeof twoSum).toEqual('function')
})

test('Given an array of integers nums [2, 7, 11, 15] and an integer 9 target, return indices of the two numbers such that they add up to 9.', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})

test('Given an array of integers nums [3, 2, 4] and an integer 6 target, return indices of the two numbers such that they add up to 6.', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
})

test('Given an array of integers nums [3, 3] and an integer 6 target, return indices of the two numbers such that they add up to 6.', () => {
    expect(twoSum([1, 3, 7, 9, 2], 11)).toEqual([3, 4])
})
