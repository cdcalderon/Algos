const backspaceString = require('./index')

test('backspaceString is a function', () => {
    expect(typeof backspaceString).toEqual('function')
})

test('Given two strings "ab#c" and "ad#c", return true ', () => {
    expect(backspaceString('ab#c', 'ad#c')).toEqual(true)
})

test('Given two strings "ab##" and "c#d#", return true ', () => {
    expect(backspaceString('ab##', 'c#d#')).toEqual(true)
})

test('Given two strings "a#c" and "b", return false ', () => {
    expect(backspaceString('a#c', 'b')).toEqual(true)
})
