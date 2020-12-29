class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert() {
        this.values.push(num); 
        this.values.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index]; 

        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parentElement = this.values[parentIndex]; 

            if (element <= parent) {
                break;
            }

            this.values[parentIndex] = element; 
            this.values[index] = parentElement;
            index = parentIndex;
        }

    }

}