const monotonicArray = require('./index')

test('MonotonicArray is a function', () => {
    expect(typeof monotonicArray).toEqual('function')
})

test('Given a function that takes in an array [-1, -5, -10, -1100, -1100, -1101, -1102, -9001] of integers and returns a boolean representing whether the array is monotonic.', () => {
    expect(monotonicArray([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])).toEqual(true)
})

test('Given a function that takes in an array [] of integers and returns a boolean representing whether the array is monotonic.', () => {
    expect(monotonicArray([])).toEqual(true)
})

test('Given a function that takes in an array [2, 1] of integers and returns a boolean representing whether the array is monotonic.', () => {
    expect(monotonicArray([2, 1])).toEqual(true)
})

test('Given a function that takes in an array [-1, -5, -10, -1100, -1101, -1102, -9001] of integers and returns a boolean representing whether the array is monotonic.', () => {
    expect(monotonicArray([-1, -5, -10, -1100, -1101, -1102, -9001])).toEqual(true)
})
