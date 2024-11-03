// Definition for singly-linked list.
class ListNode {
  val;
  next;
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head) {
  if (!head || !head.next) return head;

  const reverseListHead = reverseList(head.next);
  head.next.next = head
  head.next = null

  return reverseListHead;
}

// 1, 2 ,3 , 4 ,5

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

console.log(reverseList(createLinkedList([1, 2, 3, 4, 5]))); // 5 -> 4 -> 3 -> 2 -> 1
// console.log(reverseList(createLinkedList([1, 2]))); // 2 -> 1
// console.log(reverseList(createLinkedList([]))); // null
// console.log(reverseList(createLinkedList([1]))); // 1
// console.log(reverseList(createLinkedList([1, 2, 3, 4]))); // 4 -> 3 -> 2 -> 1
