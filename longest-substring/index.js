// --- Directions
// Given a string s, find the length of the longest substring without repeating characters.

function longestSubstring(str) {
    return longestSubstringOptimalSolution(str)
}

function longestSubstringOptimalSolution(str) {
    if (str.length <= 1) return s.length

    let longest = 0
    let left = 0
    let seenMap = {}

    for (let right = 0; right < str.length; right++) {
        let currentChar = str[right]
        let previousSeen = seenMap[currentChar]

        if (previousSeen >= left) {
            left = previousSeen + 1
        }

        seenMap[currentChar] = right
        longest = Math.max(longest, right - left + 1)
    }

    return longest
}

// function longestSubstringBruteForce2(str) {
//     if (str.length <= 1) return s.length

//     let longest = 0
//     for (let left = 0; left < str.length; left++) {
//         let seenChar = {}
//         let currentLength = 0
//         for (let right = left; right < str.length; right++) {
//             const currentChar = str[right]
//             if (!seenChar[currentChar]) {
//                 currentLength++
//                 seenChar[currentChar] = true
//                 longest = Math.max(longest, currentLength)
//             } else {
//                 break
//             }
//         }
//     }

//     return longest
// }

function longestSubstringBruteForce(str) {
    let longestTotal = 0
    let charMap = {}

    for (let i = 0; i < str.length; i++) {
        let currentLongest = 1
        longestTotal = Math.max(currentLongest, longestTotal)
        charMap[str[i]] = 1
        for (let j = i + 1; j < str.length; j++) {
            if (charMap[str[j]]) {
                charMap = {}
                break
            } else {
                currentLongest++
                longestTotal = Math.max(currentLongest, longestTotal)
                charMap[str[j]] = 1
            }
        }
    }
    return longestTotal
}

module.exports = longestSubstring
