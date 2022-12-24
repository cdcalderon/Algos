const runLengthEncoding = require('./index')

test('runLengthEncoding is a function', () => {
    expect(typeof runLengthEncoding).toEqual('function')
})

test(`Given an string "AAAAAAAAAAAAABBCCCCDD" return encoded string 9A4A2B4C2D`, () => {
    expect(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD')).toEqual('9A4A2B4C2D')
})

test(`Given an string "aA" return encoded string 9A4A2B4C2D`, () => {
    expect(runLengthEncoding('aA')).toEqual('1a1A')
})

test(`Given an string "************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA" return encoded string 9*3*7^6$7%6!9A9A2A`, () => {
    expect(runLengthEncoding('************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA')).toEqual(
        '9*3*7^6$7%6!9A9A2A'
    )
})

test(`Given an string "[(aaaaaaa,bbbbbbb,ccccc,dddddd)]" return encoded string 1[1(7a1,7b1,5c1,6d1)1]`, () => {
    expect(runLengthEncoding('[(aaaaaaa,bbbbbbb,ccccc,dddddd)]')).toEqual('1[1(7a1,7b1,5c1,6d1)1]')
})
