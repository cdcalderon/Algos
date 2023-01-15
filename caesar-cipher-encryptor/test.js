const caesarCipherEncryptor = require('./index')

test('caesarCipherEncryptor is a function', () => {
    expect(typeof caesarCipherEncryptor).toEqual('function')
})

test(`Given a string 'xyz' and key 2, should return 'zab'`, () => {
    expect(caesarCipherEncryptor('xyz', 2)).toEqual('zab')
})

test(`Given a string 'iwufqnkqkqoolxzzlzihqfm' and key 25, should return 'hvtepmjpjpnnkwyykyhgpel'`, () => {
    expect(caesarCipherEncryptor('iwufqnkqkqoolxzzlzihqfm', 25)).toEqual('hvtepmjpjpnnkwyykyhgpel')
})
