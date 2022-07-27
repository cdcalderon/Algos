const binarySearch = require('./index')

test('BinarySearch is a function', () => {
    expect(typeof binarySearch).toEqual('function')
})

test('Given the following sorted array, if the target’s value is 9, the binary search returns 2', () => {
    expect(binarySearch([1, 3, 9, 10, 12], 9)).toEqual(2)
})

test('Given the following sorted array, if the target’s value is 9, the binary search returns 2', () => {
    expect(binarySearch([1, 3, 9, 10, 12], 9)).toEqual(2)
})

test('Given the following sorted array [], if the target’s value is 12, the binary search returns -1', () => {
    expect(binarySearch([], 12)).toEqual(-1)
})

test('Given the following sorted array [0, 1], if the target’s value is 1, the binary search returns 1', () => {
    expect(binarySearch([0, 1], 1)).toEqual(1)
})

test('Given the following sorted array [1, 2, 3], if the target’s value is 3, the binary search returns 2', () => {
    expect(binarySearch([1, 2, 3], 3)).toEqual(2)
})
