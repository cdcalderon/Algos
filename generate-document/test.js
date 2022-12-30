const generateDocument = require('./index')

test('generateDocument is a function', () => {
    expect(typeof generateDocument).toEqual('function')
})

test(`Given a string 'Bste!hetsi ogEAxpelrt x ' and document 'AlgoExpert is the Best!', should return true`, () => {
    expect(generateDocument('Bste!hetsi ogEAxpelrt x ', 'AlgoExpert is the Best!')).toEqual(true)
})
