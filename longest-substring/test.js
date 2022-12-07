const longestSubstring = require('./index')

test('maxChar function exists', () => {
    expect(typeof longestSubstring).toEqual('function')
})

test('Given a string abcabcbb, find the length of the longest substring without repeating characters should be 3', () => {
    expect(longestSubstring('abcabcbb')).toEqual(3)
})

test('Given a string bbbbb, find the length of the longest substring without repeating characters should be 1', () => {
    expect(longestSubstring('bbbbb')).toEqual(1)
})

test('Given a string pwwkew, find the length of the longest substring without repeating characters should be 3.', () => {
    expect(longestSubstring('pwwkew')).toEqual(3)
})
