

const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  zipLists(ll_1, ll_2) {
    if (!ll_1.length || !ll_2.length) {
      return 'empty lists';
    }
    let ll_1Current = ll_1.head;
    let ll_2Current = ll_2.head;
    let hold1 = null;
    let hold2 = null;
    let finalRes = 'head -> ';
    let listsLength = ll_1.length + ll_2.length;
    let newLength = 0;
    while (ll_2Current && ll_1Current) {
      newLength = newLength + 2;
      hold1 = ll_1Current.next;
      hold2 = ll_2Current.next;
      ll_2Current.next = ll_1Current.next;
      ll_1Current.next = ll_2Current;
      finalRes = finalRes + `${ll_1Current.value} -> ${ll_2Current.value} -> `;
      ll_1Current = hold1;
      ll_2Current = hold2;
    }
    if (newLength < listsLength) {
      if (ll_1.length > ll_2.length) {
        while (newLength < listsLength) {
          finalRes = finalRes + `${ll_1Current.value} -> `;
          newLength++;
          ll_1Current = ll_1Current.next;
        }
      } else {
        while (newLength < listsLength) {
          finalRes = finalRes + `${ll_2Current.value} -> `;
          newLength++;
          ll_2Current = ll_2Current.next;
        }
      }
    }
    return finalRes + 'NULL';
  }
}

module.exports = LinkedList;
