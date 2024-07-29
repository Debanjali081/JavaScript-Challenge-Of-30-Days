// Task 10 :  Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1); // For undirected graph
        }
    }

    // Perform a Breadth-First Search (BFS) to find the shortest path
    bfsShortestPath(start, end) {
        const queue = [start];
        const visited = { [start]: true };
        const parent = { [start]: null };

        while (queue.length) {
            const currentVertex = queue.shift();

            if (currentVertex === end) {
                return this.reconstructPath(parent, start, end);
            }

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    parent[neighbor] = currentVertex;
                    queue.push(neighbor);
                }
            });
        }

        return null; // If there's no path from start to end
    }

    // Reconstruct the path from start to end using the parent dictionary
    reconstructPath(parent, start, end) {
        const path = [];
        let currentVertex = end;

        while (currentVertex !== null) {
            path.push(currentVertex);
            currentVertex = parent[currentVertex];
        }

        return path.reverse(); // Reverse the path to get it from start to end
    }

    // Display the graph's adjacency list
    display() {
        console.log(this.adjacencyList);
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

graph.display();
// Output:
// {
//   A: ['B', 'C'],
//   B: ['A', 'D'],
//   C: ['A', 'E'],
//   D: ['B', 'E'],
//   E: ['C', 'D']
// }

const shortestPath = graph.bfsShortestPath('A', 'E');
console.log(shortestPath); // Output: ['A', 'C', 'E']
