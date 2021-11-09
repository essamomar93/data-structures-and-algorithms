'use strict';

const Node = require('./Node');

class LinkedList {
  constructor() {
    this.length = 0;
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
    this.length++;

  }

  kthFromEnd(k) {
    if (k < 0) {
      return 'No result if input less than zero';
    }
    if (k >= this.length) {
      return 'no result';
    }

    let current = this.head;
    let i = this.length - 1;
    while (i > k) {
      current = current.next;
      i--;
    }
    return current.value;
  }
}


module.exports = LinkedList;
