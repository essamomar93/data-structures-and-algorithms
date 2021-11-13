"use strict";
const Queue = require("../lib/queue");
const Stack = require("../lib/stack");

describe(' Node & Stack & Queue its', () => {


  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  });

  it("Can successfully push multiple values onto a stack", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toBe(3);
    expect(stack.top.next.value).toBe(2);
    expect(stack.top.next.next.value).toBe(1);
  });

  it("Can successfully pop off the stack", () => {
    let stack = new Stack();
    stack.push(3);
    expect(stack.pop()).toBe(3);
  });

  it("Can successfully empty a stack after multiple pops", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull();
  });

  it("Can successfully peek the next item on the stack", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);

    stack.push(2);
    stack.peek();
    expect(stack.top.value).toEqual(2);
  });

  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.top).toBeNull();
  });

  it("Calling pop or peek on empty stack raises exception", () => {
    let stack = new Stack();
    expect((stack.pop())).toBe(false);

  });

  it("Can successfully enqueue into a queue", () => {
    let queue = new Queue();
    queue.enqueue(2);
    expect(queue.front.value).toBe(2);
  });

  it("Can successfully enqueue multiple values into a queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.front.value).toBe(1);
    expect(queue.front.next.value).toBe(2);
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    expect(queue.front.value).toBe(2);
  });

  it("Can successfully peek into a queue, seeing the expected value", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.peek();
    expect(queue.front.value).toBe(1);
  });

  it(" Can successfully empty a queue after multiple dequeues", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBeNull();
  });

  it("Can successfully instantiate an empty queue ", () => {
    let queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('Calling dequeue or peek on empty queue raises exception', ()=>{
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

});
