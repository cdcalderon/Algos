const mostWater = require('./index')

test('mostWater is a function', () => {
    expect(typeof mostWater).toEqual('function')
})

test('Given an array of integers nums [1, 8, 6, 2, 5, 4, 8, 3, 7], return max container area.', () => {
    expect(mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49)
})

test('Given an array of integers nums [1, 1], return max container area.', () => {
    expect(mostWater([1, 1])).toEqual(1)
})
