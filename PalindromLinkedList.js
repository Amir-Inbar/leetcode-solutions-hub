/*
Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 

Follow up: Could you do it in O(n) time and O(1) space?
*/

/*
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val;
  next;
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}


var isPalindrome = function (head) {
    let slow = head,
        fast = head,
        prev = null,
        temp;
  
    // Step 1: Find the middle of the linked list using two pointers
    console.log("Finding the middle of the linked list:");
    while (fast && fast.next) {
      console.log(`  slow: ${slow.val}, fast: ${fast.val}`);
      slow = slow.next;
      fast = fast.next.next;
    }
    
    console.log(`Middle found: slow at ${slow ? slow.val : 'null'}`);
  
    // Step 2: Reverse the second half of the linked list
    prev = slow;
    slow = slow.next;
    prev.next = null; // Break the list into two halves
    console.log("Reversing the second half of the linked list:");
    while (slow) {
      console.log(`  Current slow: ${slow.val}, prev: ${prev.val}`);
      temp = slow.next;
      slow.next = prev;
      prev = slow;
      slow = temp;
    }
    
    // The head of the reversed second half is now `prev`
    console.log("Second half reversed:");
    let reversed = prev;
    while (reversed) {
      console.log(`  Reversed part: ${reversed.val}`);
      reversed = reversed.next;
    }
  
    // Step 3: Compare the first half and the reversed second half
    fast = head; // Reset fast to the start (first half)
    slow = prev; // slow now points to the head of the reversed second half
    console.log("Comparing the two halves:");
    
    while (slow) {
      console.log(`  Comparing: ${fast.val} and ${slow.val}`);
      if (fast.val !== slow.val) {
        console.log("Values do not match. Not a palindrome.");
        return false; // Not a palindrome
      }
      fast = fast.next;
      slow = slow.next;
    }
  
    console.log("All values matched. It is a palindrome.");
    return true; // It's a palindrome
  };
  

console.log(
  isPalindrome(
    new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))
  )
); // true
// console.log(isPalindrome(new ListNode(1, new ListNode(2))) // false
// console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1))))))); // true
// console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))); // false
// console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1))))))); // true
// console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))))); // false

//   console.log(head);

//   if (!head) return false;
//   const arr1 = head;
//   // Split the array into 2 arrays
//   const isHeadEven = arr1.length % 2 === 0 ? true : false;
//   // If it's odd need to find the middle and cut according to him

//   if (!isHeadEven) {
//     // If it's even  need to cut in the middle
//     arr1.splice(Math.floor(arr1.length / 2), 1);
//   }

//   const arr2 = arr1.splice(0, arr1.length / 2);

//   // Convert to string and reverse one of them
//   const strOne = arr1.reverse().join("");

//   const strTwo = arr2.join("");

//   // return the result
//   return strOne === strTwo;
