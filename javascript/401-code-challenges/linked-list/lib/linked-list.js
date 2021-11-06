'use strict';

const Node = require('./Node');


class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {

    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return this;
  }
}


module.exports = LinkedList;
