class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
    }

    dijkstra(startV, endV) {
        const nodes = new PriorityQueue(); 
        const distances = {};
        const previous = {};
        let path = []; // to return at the end
        let smallest;
        
        // building initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === startV) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }

            previous[vertex] = null;
        }

        // as long as there is something to visit

        while (nodes.values.length) {
            smallest = nodes.dequeue().val; 
            if (smallest === endV) {
                // return the path - it is DONE
                console.log(smallest); 
                console.log(distances);
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbour in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbour];
                    console.log(nextNode);

                    // calculate new distance to neighbouring node 
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbour = nextNode.node;  
                    if (candidate < distances[nextNode.node]) {
                        // updating new smallest distance to neighbour
                        distances[nextNeighbour] = candidate; 

                        // updating previous - how we GOT to next neighobour
                        previous[nextNeighbour] = smallest;

                        // enqueue in priority queue with new priority; 
                        nodes.enqueue(nextNeighbour, candidate);
                    }


                }
             }
        }

        return path.concat(smallest).reverse();

    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority}); 
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

// This is O(N * log(N));


let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "E"));


// can replace the priority queue with the binary heap version
