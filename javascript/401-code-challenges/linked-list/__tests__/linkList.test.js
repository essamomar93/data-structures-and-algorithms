'use strict';

const LinkedList = require('../lib/linked-list');


describe('linked-list test', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const newList = new LinkedList();
    expect(newList.head).toBeNull();
  });

  it('Test if the first node is the head', () => {
    const newlist = new LinkedList();
    newlist.insert("1");
    expect(newlist.head.value).toBe("1");
    expect(newlist.head.next).toBeNull();
  });

  it('The head property will properly point to the first node in the linked list', () => {
    const newlist = new LinkedList();
    newlist.append(1);
    expect(newlist.head.value).toEqual(1);
    newlist.append(2);
    expect(newlist.head.value).toEqual(1);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    const newlist = new LinkedList();
    newlist.append(1);
    expect(newlist.head).toBeDefined;
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const newlist = new LinkedList();
    newlist.append(1);
    newlist.append(2);
    expect(newlist).toEqual({ "head": { "next": { "next": null, "value": 2 }, "value": 1 } });

  });
  it('Test returning true if the value exists in the linked list', () => {
    const newlist = new LinkedList();
    newlist.append();
    expect(newlist.head).toBeDefined;
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const linkedlists = new LinkedList();
    linkedlists.insert("c");
    linkedlists.insert("b");
    linkedlists.insert("a");

    expect(linkedlists.toString()).toBe("{ a } -> { b } -> { c } -> NULL");
   
  });
});
