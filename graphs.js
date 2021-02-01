class Graph {
    constructor() {
        this.adjacencyList = {}
    }


    addVertex(name) {
        if (!this.adjacencyList[name]) {
            this.adjacencyList[name] = [];
        }

    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2); 
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            (vertex) => vertex !== vertex2
        )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex1].filter(
            (vertex) => vertex !== vertex1
        )
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex); 
        }

        delete this.adjacencyList[vertex];
    }

    DFSr(start) {
        let result = [];
        let visitedVertices = {};
        let adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) {
                return null;
            }

            visitedVertices[vertex] = true; 
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    return dfs(neighbour)
                }
            })


        })(start);


        return result; 
    }

    DFSi(start) {
        let stack = [start]; 
        let result = [];
        let visitedVertices = {};
        let currentVertex;

        visitedVertices[start] = true;
        while (stack.length) {
            console.log(stack);
            currentVertex = stack.pop(); 
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if (!visitedVertices[neighbour]) {
                    visitedVertices[neighbour] = true;
                    stack.push(neighbour)
                }
            })
        }

        return result;
    }

    BFS(start) {
        let queue = [start]; 
        let results = []; 
        let visited = {};
        let currentVertex;
        visited[start] = true;
        
        while (queue.length) {
            console.log(queue);
            currentVertex = queue.shift();
            results.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            })
        }

        return results; 
    }

}

let g = new Graph(); 
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.BFS("A"));

