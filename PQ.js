
class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority); 
        this.values.push(newNode);
        this.values.bubbleUpPriority();
    }

    bubbleUpPriority() {
        let index = this.values.length - 1;
        const element = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parentElement = this.values[parentIndex]; 

            if (element.priority >= parentElement.priority) {
                break;
            }

            this.values[parentIndex] = element;
            this.values[index] = parentElement;
            index = parentIndex; 
        }
    }

    dequeue() {
        let removed = this.values[0];
        let mostRecent = this.values.pop(); 

        if (this.values.length > 0) {
            this.values[0] = mostRecent; 
            this.values.sinkDownPriority();
        }

        return removed;
    }

    sinkDownPriority() {
        let index = 0; 
        let length = this.values.length;
        const element = this.values[0];

        while(true) {
            let leftChildIndex = 2*index + 1; 
            let rightChildIndex =  2*index + 2; 
            let rightChild, leftChild; 
            let swap = null; 

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex]; 
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                    this.values[leftChildIndex] = element; 
                    this.values[0] = leftChild; 
                }

                if (rightChildIndex < length) {
                    rightChild = this.values[rightChildIndex];
                    if ((rightChild.priority < element.priority && swap === null) || (swap === leftChildIndex && rightChild.priority < leftChild.priority)) {
                        swap = rightChildIndex;
                        this.values[rightChildIndex] = element;
                        this.values[0] = rightChild;
                    }
                }

                if (swap === null) {
                    break;
                }

                this.values[index] = this.values[swap]; 
                this.values[swap] = element;
                index = swap;
            } 
        }
    }
}


