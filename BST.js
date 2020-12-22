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

    // return true or false is val exists within the current tree
    // if current is undefined, current = this.root
    find(val, current) {
        if (current === undefined) {
            current = this.root;
        }

        if (current.val == val) {
            return true; 
        } else if (current.val < val && current.left !== null) {
            current = current.left;
            this.find(val, current);
        } else if (current.val > val && current.right !== null) {
            current = current.right;
            this.find(val, current);
        }

        return false; 
        // ... this.find(val, current.left/right)
    }

    // remove and return the smallest node of a given tree
    removeSmallest(current) {
        if (current === undefined) {
            current = this.root;
        }

        let smallest = this.getSmallestFromSubtree(); 
        while (current.left != smallest) {
            current = current.left; 
        }

        current.left = null
        return smallest; 

    }

};