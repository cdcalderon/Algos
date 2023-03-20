const maxConsecutiveOnes = require('./index')

test(`Given a binary array [1,1,0,1,1,1], return should be 3`, () => {
    expect(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toEqual(3)
})

test(`Given a binary array [1, 1, 0, 1, 1, 1, 1, 0, 1, 0], return should be 4`, () => {
    expect(maxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1, 0, 1, 0])).toEqual(4)
})

test(`Given a binary array [1, 1, 0, 1, 0, 1, 0, 0, 1, 0], return should be 3`, () => {
    expect(maxConsecutiveOnes([1, 1, 0, 1, 0, 1, 0, 0, 1, 0])).toEqual(2)
})
