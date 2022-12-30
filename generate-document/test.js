const generateDocument = require('./index')

test('arrayOfProducts is a function', () => {
    expect(typeof generateDocument).toEqual('function')
})

test(`Given a string 'a hsgalhsa sanbjksbdkjba kjx' and document 'AlgoExpert is the Best!', should return true`, () => {
    expect(generateDocument('a hsgalhsa sanbjksbdkjba kjx', 'AlgoExpert is the Best!').toEqual(true)
})


