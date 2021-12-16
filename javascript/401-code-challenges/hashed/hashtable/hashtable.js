'use strict';
const LinkedList =require('./linked-list');

class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  add(key, value) {
    const hash = this.hash(key);
    const entry = { [key]: value };
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    this.map[hash].append(entry);
  }
  get(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) return null;
    let i = this.map[hash];
    let temp = i.head;
    if (!temp) return 'null';
    if (temp.value[key]) return temp.value[key];
    while (temp.next) {
      temp = temp.next;
      if (temp.value[key]) return temp.value[key];
    }
  }
  contain(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) return false;
    let i = this.map[hash];
    let temp = i.head;
    if (!temp) return false;
    if (temp.value[key]) return true;

    while (temp.next) {
      temp = temp.next;
      if (temp.value[key]) return true;
    }
  }
  hash(key) {
    const assciSum = key.split('').reduce((p, n) => p + n.charCodeAt(0), 0);
    const withPrime = assciSum * 599;
    return withPrime % this.size;
  }
}
module.exports = HashMap;
