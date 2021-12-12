'use strict';
const Node = require('./Node');

class LinkedList {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  add(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      this.length++;
    } else {
      let current = this.root;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.length++;
    }
  }

  getValue(value) {
    let current = this.root;
    for (let i = 0; i < this.length; i++) {
      if (current.value[value]) {
        return current.value[value];
      }
      current = current.next;
    }
    return null;
  }

  includes(value) {
    let current = this.root;
    for (let i = 0; i < this.length; i++) {
      if (current.value[value]) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

module.exports = LinkedList;
