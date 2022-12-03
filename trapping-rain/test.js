const trappingWater = require('./index')

test('TrappingWater is a function', () => {
    expect(typeof trappingWater).toEqual('function')
})

test('Given an array of integers nums [2, 7, 11, 15] should compute how much water it can trap after raining with total of 6.', () => {
    expect(trappingWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6)
})

test('Given an array of integers nums [3, 2, 4] should compute how much water it can trap after raining with total of 9', () => {
    expect(trappingWater([4, 2, 0, 3, 2, 5])).toEqual(9)
})
