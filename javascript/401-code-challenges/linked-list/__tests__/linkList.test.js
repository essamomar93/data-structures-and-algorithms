'use strict';

const LinkedList = require('../lib/linked-list');


describe('linked-list test', () => {
  test('Can successfully instantiate an empty linked list', () => {
    const newList = new LinkedList();
    expect(newList.head).toBeNull();
  });

  test('Test if the first node is the head', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
  });

  test('The head property will properly point to the first node in the linked list', () => {
    const newlist = new LinkedList();
    newlist.append(1);
    expect(newlist.head.value).toEqual(1);
    newlist.append(2);
    expect(newlist.head.value).toEqual(1);
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    const newlist = new LinkedList();
    newlist.append(1);
    expect(newlist.head).toBeDefined;
  });
  test('Can properly return a collection of all the values that exist in the linked list', () => {
    const newlist = new LinkedList();
    newlist.append(1);
    newlist.append(2);
    expect(newlist).toEqual({ "head": { "next": { "next": null, "value": 2 }, "value": 1 } });

  });
  test('Test returning true if the value exists in the linked list', () => {
    const newlist = new LinkedList();
    newlist.append();
    expect(newlist.head).toBeDefined;
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    let result = list.toString();

    expect(result).toEqual(
      '(head)-->[5]-->[4]-->[3]-->[2]-->[1]--> Null');
  });
});
