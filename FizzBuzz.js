// Given an integer n, return a string array answer (1-indexed) where:
//
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
//
//
// Example 1:
//
// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:
//
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:
//
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

function fizzBuzz(n) {

    // Contain the results
    const results = []
    for (let i = 1; i < n + 1; i++) {
        //  If it divides by 3 and not 5
        if (i % 3 === 0 && i % 5 !== 0) {
            results.push('Fizz')
        }
        //  If it divides by 5 and not 3
        else if (i % 5 === 0 && i % 3 !== 0) {
            results.push('Buzz')
        }
        //  If it divides by 3 and by 5
        else if (i % 5 === 0 && i % 3 === 0) {
            results.push('FizzBuzz')
        }
        // All other options

        else {
            results.push(i)
        }
    }
    return results
}

// console.log(fizzBuzz(3))
// console.log(fizzBuzz(5))
console.log(fizzBuzz(15))
