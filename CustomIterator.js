// Custom Iterator Example
function createIterator(array) {
    let index = 0; // Start at the first index

    return {
        next: function() {
            if (index < array.length) {
                return { value: array[index++], done: false }; // Return the current value and indicate not done
            } else {
                return { done: true }; // Indicate that iteration is complete
            }
        }
    };
}

// Usage
const array = [1, 2, 3, 4, 5];
const iterator = createIterator(array);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { done: true }
