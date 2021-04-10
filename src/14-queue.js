const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

class Queue {
  constructor() {
    this.tail = new ListNode();
    this.head = new ListNode();
    this.count = 0;
  }

  get size() {
    return this.count;
  }

  enqueue(el) {
    const node = new ListNode();
    node.value = el;
    node.next = null;

    if (this.size === 0) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.count++;
  }

  dequeue() {
    const res = this.head.value;
    this.head = this.head.next;
    return res;
  }
}
// const q1 = new Queue()
// q1.enqueue(10)
// q1.enqueue(7)
// q1.enqueue(13)
// console.log(q1.head);
// q1.dequeue()
// console.log(q1.head);
module.exports = Queue;
