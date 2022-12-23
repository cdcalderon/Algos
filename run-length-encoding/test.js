const runLengthEncoding = require('./index')

test('runLengthEncoding is a function', () => {
    expect(typeof runLengthEncoding).toEqual('function')
})

test(`Given an string "AAAAAAAAAAAAABBCCCCDD" return encoded string 9A4A2B4C2D`, () => {
    expect(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD')).toEqual('9A4A2B4C2D')
})
