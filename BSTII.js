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

    DFSPreOrder() {
        let visited = []; 
        let current = this.root; 

        function traverse(node) {
            visited.push(node); 
            if (node.left) {
                traverse(node.left);
            }

            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(current); 
        return visited; 
    }

    DFSPostOrder() {
        let visited = [];
        let current = this.root;

        function traverse(node) {
            if (node.left) {
                traverse(node.left); 
            } 

            if (node.right) {
                traverse(node.right);
            }
            
            // when you get to the end of the line
            visited.push(node.data);
        }

        traverse(current); 
        return visited; 
    }


}

var newBST = new BST(); 