const permutations = require('./index')

test('maxChar function exists', () => {
    expect(typeof permutations).toEqual('function')
})

test('Given string 41352 I should get 41523', () => {
    expect(permutations('41352')).toEqual('41523')
})

test('Given string 11121 I should get 11211', () => {
    expect(permutations('11121')).toEqual('11211')
})
