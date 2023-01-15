const caesarCipherEncryptor = require('./index')

test('caesarCipherEncryptor is a function', () => {
    expect(typeof caesarCipherEncryptor).toEqual('function')
})

test(`Given a string 'xyz' and key 2, should return 'zab'`, () => {
    expect(caesarCipherEncryptor('xyz', 2)).toEqual('zab')
})
