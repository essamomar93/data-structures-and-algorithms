"use strict";

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
}
