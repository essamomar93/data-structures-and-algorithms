'use strict';

let {Graph} = require('../graph');

describe('Graph Tests', () => {

  it('Node can be successfully added to the graph', () => {
    let graph = new Graph();

    graph.addNode(5);
    expect(graph.size()).toBe(1);
  });


  it('The proper size is returned, representing the number of nodes in the graph', () => {
    let graph = new Graph();

    graph.addNode(10);
    graph.addNode(15);
    graph.addEdge(10, 15);

    expect(graph.size()).toEqual(2);
  });

  it('A graph with only one node and edge can be properly returned', () => {
    let graph = new Graph();

    graph.addNode(5);
    graph.addEdge(5, 5, 2);

    expect(graph.size()).toEqual(1);
  });

  it('An empty graph properly returns null', () => {
    let graph = new Graph();

    expect(graph.size()).toBe(0);
  });

});
