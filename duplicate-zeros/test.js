const duplicateZeros = require('./index')

test(`duplicateZeros function is defined`, () => {
    expect(duplicateZeros).toBeDefined()
})

test('Given a fixed-length integer array [1,0,2,3,0,4,5,0], it should return [1,0,0,2,3,0,0,4]', () => {
    expect(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])).toEqual([1, 0, 0, 2, 3, 0, 0, 4])
})

test('Given a fixed-length integer array [1,2,3], it should return [1,2,3]', () => {
    expect(duplicateZeros([1, 2, 3])).toEqual([1, 2, 3])
})
