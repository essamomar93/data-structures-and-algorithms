'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addNode(vertex) {
    this._adjacencyList.set(vertex, []);
  }

  addEdge(startVertex, endVertex, weight) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      console.log('Vertex not found');
      // return;
    } else {

      const adjacencies = this._adjacencyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    }

  }

  getNeighbours(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      console.log('vertex does not exist');
      // } else {
      return this._adjacencyList.get(vertex);
    }
  }

  getNodes() {
    let arr = [];
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      arr.push(vertex, edge);
    }
  }

  size(){
    return this._adjacencyList.size;
  }
}

module.exports = { Vertex, Edge, Graph };
