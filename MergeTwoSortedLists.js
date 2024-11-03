/**
 * Definition for singly-linked list.
 *
 */
class ListNode {
     val
     next
        constructor(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

function mergeTwoLists(list1, list2) {
    if(!list2) return list1;
    if(!list1) return list2;

    if(list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

// 0 2 4 list1
// 1 3 4 list2

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



mergeTwoLists(createLinkedList([0, 2, 4]), createLinkedList([1, 3, 4])); // 1 -> 1 -> 2 -> 3 -> 4 -> 4
// console.log(mergeTwoLists(createLinkedList([1,3,5]), createLinkedList([2,4,6]))); // 0
