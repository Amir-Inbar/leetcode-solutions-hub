/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

/*

Need to sum each number in index except the num[i] itself.


Objecties

[] In each nums[i] need to sum the entire array exept in the same index


alternaties

Banalit way
Iterate for loop in each index and for loop inside each one. O(n^2)

Sum the entire array and reduce in each index from the total array.

*/


function productExceptSelf(nums) {
  const output = Array.from({ length: nums.length }, () => 1);

  let left = 1
  for (let i = 0; i < nums.length; i++) {
    output[i] *= left
    left *= nums[i]
  }

  let right = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= right
    right *= nums[i]
  }
  return output
}


console.log(productExceptSelf([1, 2, 3, 4]))
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// console.log(productExceptSelf([0, 0]));