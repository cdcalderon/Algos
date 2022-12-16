const threeNumberSum = require('./index')

test('function threeNumberSum exists', () => {
    expect(typeof threeNumberSum).toEqual('function')
})

test('Write a function that takes in a non-empty array [12, 3, 1, 2, -6, 5, -8, 6] of distinct integers and an integer representing a target sum 0.', () => {
    const arr = [12, 3, 1, 2, -6, 5, -8, 6]
    const targetSum = 0
    const threeNumberSumResult = threeNumberSum(arr, targetSum)
    console.log('carlos', JSON.parse(threeNumberSumResult))
    expect(threeNumberSumResult).toBe([
        [-8, 2, 6],
        [-8, 3, 5],
        [-6, 1, 5],
    ])
})

test('Write a function that takes in a non-empty array [1, 2, 3] of distinct integers and an integer representing a target sum 6.', () => {
    const arr = [1, 2, 3]
    const targetSum = 6
    const threeNumberSumResult = threeNumberSum(arr, targetSum)

    expect(threeNumberSumResult).toEqual([[1, 2, 3]])
})
