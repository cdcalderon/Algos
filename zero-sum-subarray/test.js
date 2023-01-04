const zeroSumSubarray = require('./index')

test('zeroSumSubarray is a function', () => {
    expect(typeof zeroSumSubarray).toEqual('function')
})

test(`Given a list of integers nums, should return true`, () => {
    expect(zeroSumSubarray([1, 2, 3])).toEqual(false)
})
