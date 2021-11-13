const Node = require('./node');


class Stack {

  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    if (this.isEmpty()) { 
      const newNode = new Node(value);
      this.top = newNode;

    } else {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
    }
  }
  pop() {
    if (this.isEmpty()) {
      console.log('No Nodes are left in your stack');
      return false;
    }
    const temp = this.top; 
    this.top = this.top.next;
    temp.next = null; 
    return temp.value;
  }

  peek() {
    if (this.isEmpty()) {
      return ' no Nodes in the stack'
    }
    return this.top.value;
  }
  isEmpty() {
    return this.top === null;
  }
}


module.exports = Stack;
