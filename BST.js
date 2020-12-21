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
        if (current === undefined) {
            current = this.root;
        }

        // empty tree
        if (current === null) {
            current = node; 
            return; 
        } 

        if (node.data < current.data) {
            if (current.left === null) {
                current.left = node;
                return;
            } else {
                this.insert(node, current.left);
            }
        }

        if (node.data > current.data) {
            if (current.right === null) {
                current.right = node; 
                return;
            } else {
                this.insert(node, current.right)
            }
        }
    };

    // recursive
    getLargestFromSubtree(current){
        if (current === undefined) {
            current = this.root;
        }

        if (current === null) {
            return null; 
        }

        if (current.right === null) {
            return current.val;
        }

       return this.getLargestFromSubtree(current.right)

    }

    // iterative
    getSmallestFromSubtree(current){
        let runner = this.root;

        if (!runner) {
            return;
        }

        while (runner.left) {
            runner = runner.left;
        }

        return runner.val;
    }
};