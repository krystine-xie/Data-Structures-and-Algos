// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

function partitionDLL(DLL, pivot) {
    let runner = DLL.head;
    let length = DLL.size();
    let temp = null; 
    
    for (let i=0; i<length; i++) {
        if (runner.data < pivot) {
            temp = runner; 
            runner = runner.next;
            DLL.addHead(DLL.removeVal(temp.data));
        } else if (runner.data > pivot) {
            temp = runner;
            runner = runner.next;
            DLL.addTail(DLL.removeVal(temp.data));
        } else {
            runner = runner.next;
        }
    }
    return DLL;
}

function partitionDLL2(DLL, pivot) {
    let leftArray = [];
    let rightArray = [];
    let currentNode = DLL.head;
    while (currentNode.next !== null) {
        if (currentNode.data < pivot) {
            leftArray.push(currentNode.data);
        } else {
            rightArray.push(currentNode.data);
        }

        leftArray.push(pivot)
    }
    leftArray.join(rightArray);

    let newDLL = new DLL();
    for (let i = leftArray.length - 1; i <= 0; i--) {
        newDLL.addHead(leftArray[i]);
    };

    return newDLL;
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==

    // return true or false if value exists
    exists(value) {
        if (!this.head || this.length === 0) {
            return null;
        } 

        let currentNode = this.head; 
        while (currentNode.next !== null) {
            if (currentNode.data == value) {
                return true; 
            }
        }
        return false;
    }

    // reverse a doubly linked list
    reverse() {
        if (this.length === 0) {
            return null;
        } 

        let currentNode = this.head; 
        while (currentNode !== null) {
            temp = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = temp; 
            currentNode = currentNode.next;
        }
    }

    reverse2() {
        if (this.length === 0) {
            return null;
        } 

        let currentNode = this.head; 
        while (currentNode) {
            let temp = currentNode.next; 
            currentNode.next = currentNode.prev
            currentNode.prev = temp; 
            currentNode = temp;
        }

        let temp = this.head; 
        this.head = this.tail; 
        this.tail = temp;
    }

    // return true of false if the current DLL is a palindrome
    checkPalindrome() {
        let isPalindrome = true; 

        if (this.length == 1) {
            return isPalindrome; 
        }

        if (!this.head || this.length == 0) {
            return null;
        }

        let leftNode = this.head;
        let rightNode = this.tail; 

        while (leftNode.next != rightNode.prev) {
            if (leftNode.data == rightNode.data) {
                leftNode = leftNode.next; 
                rightNode = rightNode.prev; 
            } else {
                isPalindrome = false; 
            }
        }

        return isPalindrome; 
    }

    // add node before target if target exists
    // target is a node data
    prepend(target, node) {
        if(!this.head) {
            this.head = node;
            this.tail = node; 
            this.length++;
        } 

        let currentNode = this.head;
        let previousNode = null;

        while (currentNode.next != null) {
            if (currentNode.data == target) {
                currentNode.prev = node;
                previousNode.next = node;
                node.next = currentNode;
                node.prev = previousNode;
                this.length++; 
            } else {
                previousNode = currentNode; 
                currentNode = currentNode.next;
            }
        }
    }

    // push to head
    addHead(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    // pop from tail
    removeTail() {
        if (this.head == null) return; // empty list
        if (this.head === this.tail) { // one node
            var temp = this.tail;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        }
        var temp = this.tail;
        this.tail = temp.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;
        return temp;
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // return length
    size() {
        return this.length;
    }


    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node){
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.tail.prev = this.tail;
            node.next = null;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    // add after target if exists
    append(target, node){
        if(!this.head) {
            this.head = node;
            this.tail = node; 
            this.length++;
        } 

        let currentNode = this.tail;
        let nextNode = null;

        while (currentNode.prev != null) {
            if (currentNode.data == target) {
                currentNode.next = node;
                nextNode.prev = node;
                node.prev = currentNode;
                node.next = nextNode;
                this.length++; 
            } else {
                nextNode = currentNode; 
                currentNode = currentNode.prev;
            }
        }
    }


    // pop from head
    removeHead(){
        if (!this.head | this.length == 1) {
            return null;
        } 

        this.head = this.head.next; 
        this.head.prev = null; 
        this.length--;
    }
}
