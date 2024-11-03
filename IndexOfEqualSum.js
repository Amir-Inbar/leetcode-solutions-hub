/*
Q Given an array of integers, find the index which the sum of both sides are equal.
REACTO

R - READ
E - EXAMPLES
A - APROCH/ Alternatives
C - Code
T - Test
O - Optimaize

Example:
- Input - []
- output - -1

- Input - [1]
- output - -1

- Input - [-1,-1,-1,-1] -4
- output - 0

- Input - [1,1,3]
- output - -1

- Ipnut - [4,6,3,3,2,2] 
- Output - 2 - Index of number 3

left = 0
right = num.length -1
sumLeft = 0
sumRight = 0

sumLeft = 10
sumRight = 10

Run only when left < right





- Input [2,2,0,2,2]
- Output - 1/2 - Index of number 6

- Input [-1,2,0,1]
- Output - 1 - Index of number 2

Alternatives

*/


const IndexOfEqualSum = (num) => { }


console.log(IndexOfEqualSum([])) // -1
console.log(IndexOfEqualSum([1])) // -1
console.log(IndexOfEqualSum([-1, -1, -1, -1])) // 0
console.log(IndexOfEqualSum([1, 1, 3])) // -1
console.log(IndexOfEqualSum([4, 6, 3, 3, 2, 2])) // 2
console.log(IndexOfEqualSum([2, 2, 0, 2, 2])) // 1;