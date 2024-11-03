const nestedArray = [1, [2, 3, [4, 5], 6], [7, 8], 9];

function maxIterative(arr) {
    let largest = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            largest = Math.max(largest, maxIterative(arr[i]));
        } else {
            largest = Math.max(largest, arr[i]);
        }
    }
    return largest;
}

console.log(maxIterative(nestedArray)); // 9