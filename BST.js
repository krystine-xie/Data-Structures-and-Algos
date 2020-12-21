// https://www.cs.usfca.edu/~galles/visualization/BST.html

class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

var myBST = new BST();
myBST.insert(new BSTNode(10));

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    };

    insert(node, current){
        if (this.isEmpty()) {
            this.root = node; 
        }

        if (current === null) {
            current = node; 
            return; 
        } 

        if (node.data < current.data) {
            this.insert(node, current.left) 
        } else {
            this.insert(node, current.right)
        }
    };

    getLargestFromSubtree(current){
        while (current.right) {
            current = current.right;
        }

        return current;
    }

    getSmallestFromSubtree(current){
        while (current.left) {
            current = current.left;
        }

        return current;
    }
};