'use strict';

const Stack = require('./stack');

class pseudo_queue {
  constructor() {
    this.firstStack = new Stack();
    this.secoundStack = new Stack();
  }

  enqueue(value) {
    if (!this.firstStack.top) {
      this.firstStack.push(value);
      return;
    }
    while (this.firstStack.top) {
      this.secoundStack.push(this.firstStack.pop());
    }
    this.firstStack.push(value);

    while (this.secoundStack.top) {
      this.firstStack.push(this.secoundStack.pop());
    }
  }

  dequeue() {
    if (!this.firstStack.top) throw new Error('pseudo_queue is empty');

    return this.firstStack.pop();
  }
}

module.exports = pseudo_queue;
