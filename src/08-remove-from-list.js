/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function ListNode(x) {
  this.value = x;
  this.next = null;
}

// function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       node.next = acc;
//       return node;
//     }

//     return new ListNode(cur);
//   }, null);
// }

function removeKFromList(l, k) {
  // create new empty node
  let newHead = new ListNode();

  // create reference to the begin of the list
  const newHeadRef = newHead;
  let cur = l;
  // iterate through nodes
  while (cur.next !== null) {
    if (cur.value !== k) {
      // console.log(cur.value);
      // create new node
      const newNode = new ListNode();

      // set active node value and next pointer
      newHead.value = cur.value;
      newHead.next = newNode;

      // reset moving head pointer to the newly added node
      newHead = newNode;
    }
    // move to the next node
    cur = cur.next;
  }
  // at the end add last node value
  newHead.value = cur.value;

  return newHeadRef;
}
// removeKFromList(convertArrayToList([3, 1, 2, 3, 4, 5]), 3);
module.exports = removeKFromList;
