const Stack = require('./lib/stack');
const Queue = require('./lib/queue');

const newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);
console.log(newStack.peek()); // 3
newStack.pop();
newStack.pop();
console.log(newStack.peek()); // 2
newStack.pop();
newStack.pop();

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);

queue.dequeue();
console.log(queue);
