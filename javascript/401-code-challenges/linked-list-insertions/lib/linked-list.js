"use strict";

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value) {
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

  includes(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
      if (currentNode === null) {
        return false;
      }
    }
    return true;
  }

  toString() {
    let currentNode = this.head;
    let string = "";
    while (currentNode) {
      string += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
      if (!currentNode) {
        string += "X";
      }
    }
    return string;
  }
}


module.exports = LinkedList;
