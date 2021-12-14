
const HashmapTree = require('../treeIntersection');
const Node = require('../node');
const BinaryTree = require('../binarytree');

describe('treeIntersection Test', () => {
  let firstTree;
  let secondTree;
  beforeAll(() => {
    firstTree = new BinaryTree();
    firstTree.root = new Node(150);
    firstTree.root.left = new Node(100);
    firstTree.root.right = new Node(250);
    firstTree.root.left.left = new Node(75);
    firstTree.root.left.right = new Node(160);
    firstTree.root.right.left = new Node(200);
    firstTree.root.right.right = new Node(350);
    firstTree.root.left.right.left = new Node(125);
    firstTree.root.left.right.right = new Node(175);
    firstTree.root.right.right.left = new Node(300);
    firstTree.root.right.right.right = new Node(500);


    secondTree = new BinaryTree();
    secondTree.root = new Node(42);
    secondTree.root.left = new Node(100);
    secondTree.root.right = new Node(60);
    secondTree.root.left.left = new Node(15);
    secondTree.root.left.right = new Node(160);
    secondTree.root.right.left = new Node(200);
    secondTree.root.right.right = new Node(350);
    secondTree.root.left.right.left = new Node(125);
    secondTree.root.left.right.right = new Node(175);
    secondTree.root.right.right.left = new Node(4);
    secondTree.root.right.right.right = new Node(500);

  });
  it('test the treeIntersection ', () => {
    let hashedTest = new HashmapTree();

    expect(hashedTest.treeIntersection(firstTree, secondTree)).toEqual([100, 160, 200, 350, 125, 175, 500]);
  });

  it('test the treeIntersection if there is no trees ', () => {
    let hashedTest = new HashmapTree();
    let tree1;
    let tree2;
    expect(hashedTest(tree1, tree2)).toBeNull();
  });
 
});
