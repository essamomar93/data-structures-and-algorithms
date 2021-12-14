'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }

  includes(value) {
    let result = false;
    let nodes = this.head;
    while (nodes) {
      if (nodes.value === value) {
        return (result = true);
      }
      nodes = nodes.next;
    }
    return result;
  }
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    }
    else {
      let currentN = this.head;
      while (currentN.next) {
        currentN = currentN.next;
      }
      currentN.next = newNode;
    }
  }
  toString() {
    let string = "";
    let temNode = this.head;
    while (temNode) {
      string += `{ ${temNode.value} } -> `;
      temNode = temNode.next;
    }
    string += `NULL`;
    return string;
  }
}

module.exports = LinkedList;
