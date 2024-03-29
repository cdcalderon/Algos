const maxConsecutiveOnes = require('./index')

test(`Given a binary array [1,1,0,1,1,1], return should be 3`, () => {
    expect(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toEqual(3)
})

test(`Given a binary array [1, 1, 0, 1, 1, 1, 1, 0, 1, 0], return should be 4`, () => {
    expect(maxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1, 0, 1, 0])).toEqual(4)
})

test(`Given a binary array [1, 1, 0, 1, 0, 1, 0, 0, 1, 0], return should be 2`, () => {
    expect(maxConsecutiveOnes([1, 1, 0, 1, 0, 1, 0, 0, 1, 0])).toEqual(2)
})

test(`Given a binary array [1,0,1,1,0,1], return should be 2`, () => {
    expect(maxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toEqual(2)
})

test(`Given a numbers array [1, 1, 4, 1, 1, 1, 1, 2, 1, 7], return should be 4`, () => {
    expect(maxConsecutiveOnes([1, 1, 4, 1, 1, 1, 1, 2, 1, 7])).toEqual(4)
})

test(`Given a numbers array [1, 1, 2, 1, 0, 1, 5, 0, 1, 9], return should be 2`, () => {
    expect(maxConsecutiveOnes([1, 1, 2, 1, 0, 1, 5, 0, 1, 9])).toEqual(2)
})

test(`Given a numbers array [1,8,1,1,5,1], return should be 2`, () => {
    expect(maxConsecutiveOnes([1, 8, 1, 1, 5, 1])).toEqual(2)
})
