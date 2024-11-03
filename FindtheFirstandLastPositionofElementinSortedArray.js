/*
34. Find First and Last Position of Element in Sorted Array
Medium
Topics
Companies
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.



Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 */


const searchRange = (nums, target) => {
    const result = [-1, -1];

    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (nums[left] === target) result[0] = left;

    left = 0
    right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if (nums[right] === target) result[1] = right;
    return result
};


console.log(searchRange([5, 7, 7, 8, 8, 10], 8)) // [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)) // [-1,-1]
console.log(searchRange([], 0)) // [-1,-1]