const zeroSumSubarray = require('./index')

test('zeroSumSubarray is a function', () => {
    expect(typeof zeroSumSubarray).toEqual('function')
})

test(`Given a list of integers nums [1, 2, 3], should return true`, () => {
    expect(zeroSumSubarray([1, 2, 3])).toEqual(false)
})

test(`Given a list of integers nums [-1, -1, -1], should return true`, () => {
    expect(zeroSumSubarray([-1, -1, -1])).toEqual(false)
})

test(`Given a list of integers nums [-1, 2, 3, 4, -5, -3, 1, 2], should return true`, () => {
    expect(zeroSumSubarray([-1, 2, 3, 4, -5, -3, 1, 2])).toEqual(true)
})
