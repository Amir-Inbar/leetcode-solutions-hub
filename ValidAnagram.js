/*
Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const mapping = {};

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    mapping[letter] = (mapping[letter] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    const letter = t[i];
    if (!mapping[letter]) return false;
    mapping[letter] -= 1;
  }

  return true
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
// console.log(isAnagram("a", "ab")); // false
// console.log(isAnagram("a", "a")); // true
