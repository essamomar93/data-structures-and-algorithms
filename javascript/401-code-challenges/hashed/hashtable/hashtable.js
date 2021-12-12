'use strict';
const LinkedList =require('./linked-list');

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  hash(key) {
    const sum = key.split('').reduce((acc, v) => acc + v.charCodeAt(0), 0);
    return (sum * 19) % this.size;
  }
  set(key, value) {
    const hashed = this.hash(key);
    const entry = { [key]: value };
    if (!this.table[hashed]) {
      this.table[hashed] = new LinkedList();
    }
    this.table[hashed].add(entry);
  }
  get(key) {
    const hashed = this.hash(key);
    if (!this.table[hashed]) return null;
    return this.table[hashed].getValue(key);
  }
  includes(key) {
    const hashed = this.hash(key);
    if (!this.table[hashed]) return false;
    return this.table[hashed].includes(key);
  }
}

const hashTable = new HashTable(1024);
hashTable.set('one', '1');
hashTable.set('two', '2');
hashTable.set('three', '3');
hashTable.set('lemon', 'not-water');
hashTable.set('melon', 'water');


module.exports = HashTable;
