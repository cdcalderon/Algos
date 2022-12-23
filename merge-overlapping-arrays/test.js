const mergeOverlappingIntervals = require('./index')

test('mergeOverlappingIntervals is a function', () => {
    expect(typeof mergeOverlappingIntervals).toEqual('function')
})

test(`Given an array of integers [
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10]
  ], returns [
  [1, 2],
  [3, 8],
  [9, 10]
].`, () => {
    expect(
        mergeOverlappingIntervals([
            [1, 2],
            [3, 5],
            [4, 7],
            [6, 8],
            [9, 10],
        ])
    ).toEqual([
        [1, 2],
        [3, 8],
        [9, 10],
    ])
})

test(`Given an array of integers [
            [100, 105],
            [1, 104],
        ], returns [
  [1, 105]
].`, () => {
    expect(
        mergeOverlappingIntervals([
            [100, 105],
            [1, 104],
        ])
    ).toEqual([[1, 105]])
})
