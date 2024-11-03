/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and using only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

Input: nums = [3,3,3,3,3]
Output: 3
 

Constraints:

1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.
 
*/


const findTheDuplicateNumber = (nums) => {

  const mapping = {}
  let left = 0
  let right = nums.length - 1

  if (nums[left] === nums[right]) return nums[left]

  while (left <= right) {
    if (mapping[nums[right]] || mapping[nums[left]]) {
      return mapping[nums[right]] ? nums[right] : nums[left]
    }

    if (!mapping[nums[left]]) {
      mapping[nums[left]] = 1
      left++
    }
    if (!mapping[nums[right]]) {
      mapping[nums[right]] = 1
      right--
    }
  }
}

console.log(findTheDuplicateNumber([1, 3, 4, 2, 2]));
console.log(findTheDuplicateNumber([3, 1, 3, 4, 2]));
console.log(findTheDuplicateNumber([3, 3, 3, 3, 3]));
console.log(findTheDuplicateNumber([3, 2, 5, 14, 5, 5, 19, 18, 11, 10, 1, 4, 5, 5, 5, 5, 12, 5, 17, 5]));



