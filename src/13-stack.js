/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
function ListNode(x) {
  this.value = x;
  this.next = null;
}

class Stack {
  push(el) {
    const node = new ListNode();
    node.value = el;
    node.next = this.topNode === undefined ? null : this.topNode;
    this.topNode = node;
  }

  pop() {
    // console.log(this.topNode);
    if (this.topNode === undefined) return this.topNode;
    const result = this.topNode.value;
    this.topNode = this.topNode.next;
    return result;
  }

  peek() {
    return this.topNode.value;
  }
}
// const stack1 = new Stack();
// console.log(stack1.pop());
// stack1.push(5);
// stack1.push(9);
// stack1.push(13);
// console.log(stack1.peek());
// console.log(stack1.pop());
// console.log(stack1.topNode);
module.exports = Stack;
