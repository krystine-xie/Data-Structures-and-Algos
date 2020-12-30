class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(num) {
        this.values.push(num); 
        this.values.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index]; 

        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parentElement = this.values[parentIndex]; 

            if (element <= parentElement) {
                break;
            }
 
            this.values[parentIndex] = element; 
            this.values[index] = parentElement;
            index = parentIndex;
        }
    }

    extractMax() {
        // CONSIDER EDGE CASE 
        let removed = this.values[0]; 
        let mostRecent = this.values.pop(); 
        
        // SINK DOWN HELPER
        if (this.values.length > 0) {
            this.values[0] = mostRecent; 
            this.values.sinkDown();
            
        }

        return removed;    
    }

    sinkDown() {
        let index = 0; 
        let length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIndex = 2*index + 1; 
            let rightChildIndex =  2*index + 2; 
            let rightChild, leftChild; 
            let swap = null; 

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex]; 
                if (leftChild > element) {
                    swap = leftChildIndex;
                    this.values[leftChildIndex] = element; 
                    this.values[0] = leftChild; 
                }
            } 

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((rightChild > element && swap === null) || (swap === leftChildIndex && rightChild > leftChild)) {
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