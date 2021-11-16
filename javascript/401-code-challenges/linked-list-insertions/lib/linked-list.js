
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
    }
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let currentValue = this.head;
      while (currentValue.next) {
        currentValue = currentValue.next;
      }
      currentValue.next = node;
    }
  }

  insertBefore(old, neu) {

    let currentNode = this.head;
    if (currentNode.value === old) {
      return this.insert(neu);
    } else {
      let nextNode;
      while (currentNode.value !== old) {
        currentNode = currentNode.next;
        nextNode = currentNode.next;
      }
      const node = new Node(old);
      currentNode.value = neu;
      currentNode.next = node;
      node.next = nextNode;
    }
    return this;
  }
  insertAfter(old, neu) {
    let currentNode = this.head;
    let nextNode;
    while (currentNode.value !== old) {
      currentNode = currentNode.next;
      nextNode = currentNode.next;
    }
    if (currentNode.next === null) {
      return this.append(neu);
    } else {
      let newNode = new Node(neu);
      currentNode.next = newNode;
      newNode.next = nextNode;
    }
  }
}
module.exports = LinkedList;