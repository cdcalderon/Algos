// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    return capitalizeSolutionTwo(str)
}

function capitalizeSolutionOne(str) {
    return str
        .split(' ')
        .map((w) => `${w[0].toUpperCase()}${w.slice(1)}`)
        .join(' ')
}

function capitalizeSolutionTwo(str) {
    let lArray = [str[0].toUpperCase()]

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            lArray.push(str[i].toUpperCase())
        } else {
            lArray.push(str[i])
        }
    }

    return lArray.join('')
}

module.exports = capitalize
