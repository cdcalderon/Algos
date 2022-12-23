const firstDuplicateValue = require('./index')

test('firstDuplicateValue is a function', () => {
    expect(typeof firstDuplicateValue).toEqual('function')
})

test(`Given an array of integers [2, 1, 5, 2, 3, 3, 4], returns 2.`, () => {
    expect(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4])).toEqual(2)
})

test(`Given an array of integers [2, 1, 5, 3, 3, 2, 4], returns 3.`, () => {
    expect(firstDuplicateValue([2, 1, 5, 3, 3, 2, 4])).toEqual(3)
})

test(`Given an array of integers [3, 1, 3, 1, 1, 4, 4], returns 1.`, () => {
    expect(firstDuplicateValue([3, 1, 3, 1, 1, 4, 4])).toEqual(3)
})

test(`Given an array of integers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10], returns 10.`, () => {
    expect(firstDuplicateValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10])).toEqual(10)
})
