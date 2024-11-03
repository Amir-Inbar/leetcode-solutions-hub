/*
Given an array of strings strs, group the 
anagrams
 together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
https://leetcode.com/problems/group-anagrams/


*/




const groupAnagrams = (strs) => {
  const output = []
  const hashMap = {}

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("")
    hashMap[sortedStr] = hashMap[sortedStr] ? [...hashMap[sortedStr], str] : [str]
  }
  for (const [key, value] of Object.entries(hashMap)) {
    output.push(value)
  }
  return output
};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))