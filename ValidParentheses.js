// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
//
//
// Example 1:
//
// Input: s = "()"
//
// Output: true
//
// Example 2:
//
// Input: s = "()[]{}"
//
// Output: true
//
// Example 3:
//
// Input: s = "(]"
//
// Output: false
//
// Example 4:
//
// Input: s = "([])"
//
// Output: true
//
//
//
// Constraints:
//
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

const mapParentheses = {
    "{": "}",
    "(": ")",
    "[": "]"
}


const isValid = (s) => {

    const stack = [];
    for (const char of s) {
        if (char in mapParentheses) {
            // If it's an opening bracket, push the corresponding closing bracket to the stack
            stack.push(mapParentheses[char]);
        } else {
            // If it's a closing bracket, check if it matches the last closing bracket in the stack
            if (stack.length === 0 || stack.pop() !== char) {
                return false;
            }
        }
    }

    return stack.length === 0
}

// console.log(isValid("()[]{}")) // true
// console.log(isValid("(]")) // false
// console.log(isValid("(])")) // false
// console.log(isValid("([])")) // true
console.log(isValid("(([]){})")) // true



// How to detect outside click in html?

// document.addEventListener('click', function(event) {
//     const isClickInside = document.querySelector('.modal').contains(event.target);
//     if (!isClickInside) {
//         // The click was outside the modal
//         console.log('outside')
//     }
// The button THAT i CKICK IS FIRST BLOCK
// 