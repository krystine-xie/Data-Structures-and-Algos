class SLLNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null; 
        this.tail = null
        this.length = 0
    }

    // add new node at the end of SLL
    push(data) {
        let newNode = newNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // removing a node at the end of SLL
    pop() {
        if (this.length === 0 || this.head === null) {
            return undefined;
        } else {
            let currentNode = this.head;
            let secondToLastNode = this.head;
            while (currentNode.next) {
                secondToLastNode = currentNode; 
                currentNode = currentNode.next; 
            }

            secondToLastNode.next = null; 
            this.tail = secondToLastNode; 
            this.length--;
        }
        
        return currentNode;
    }

    // removing a node at the beginning of SLL
    shift() {
        if (this.length === 0 || this.head === null) {
            return undefined;
        }

        let nodeRemoved = this.head; 
        this.head = this.head.next;
        this.length--; 
        return nodeRemoved; 
    }

    // adding a node at the beginning of SLL 
    unshift(data) {
        let newNode = new Node(data);

        if (this.length === 0 || this.head === null) {
            this.head = newNode;
            this.tail = newNode
        } else {
            let second = this.head; 
            this.head = newNode;
            this.head.next = second; 
        }

        this.length++;
        return this;
    }

    // retrieving a node by its position in the SLL
    get(index) {
        let currentNode = this.head;
        let count = 0; 
        if (index < 0 || index > this.length) {
            return null;
        } 

        while (currentNode.next !== node) {
            if (count === index) {
                return currentNode;
            } else {
                count++; 
            }
        }   
    }

    set(data, index) {
        let foundNode = this.get(index);
        if (!foundNode) {
            return false
        } else {
            let newNode = new Node(data);
            foundNode = newNode;
            return true;
        }

    }

    insert(data, index) {
        let newNode = new Node(data);

        if (index < 0 || index > this.length) {
            return false;
        } else if (index === this.length) {
            this.push(data); 
        } else if (index === 0) {
            this.unshift(data);
        } else {
            let prevNode = this.get(index-1);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
        }
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            return undefined;
        }

        if (index === this.length - 1) {
            this.pop();
        } else if (index === 0) {
            this.shift();
        } else {
            let prevNode = this.get(index-1); 
            let thisNode = this.get(index); 
            prevNode.next = thisNode.next; 
        }
        this.length--; 
        return thisNode;
    }


}