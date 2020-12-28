class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
};

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let current = this.root;
        let newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode; 
            return this;
        }

        while (true) {
					if (data === current.data) {
						return undefined;
					} 
					if (data < current.data) {
						if (current.left === null) {
							current.left = newNode;
							return this;
						} else {
							current = current.left;
						}
					} else { 
						if (current.right === null) {
							current.right = newNode;
							return this;
						} else {
							current = current.right;
						}
					}
				}

    }

    find(data) {
        if (this.root === null) {
            return false;
        } 

        let current = this.root;

        while (current && !found) {
            if (data < current.data) {
                current = current.left; 
            } else if (data > current.data) {
                current = current.right;
            } else {
                return true;
            }
        }

        return false;
    }

    BFS() {
        let queue = []; 
        let visited = []; 
        let node = this.root;
        queue.push(node); 

        while (queue.length) {
            node = queue.shift();

            visited.push(node); 

            if (node.left) {
                queue.push(node.left); 
            } 

            if (node.right) {
                queue.push(node.right);
            }
        }

        return visited; 
    }
}

var newBST = new BST(); 