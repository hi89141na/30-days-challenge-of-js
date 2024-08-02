//! Day 17: Data Structures
//! Tasks/Activities:
//todo Activity 1: Linked List
//* Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

}
//* Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class linkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        if (!this.head) {
            this.head = new Node(data);
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(data);
        }
    }
    remove(data) {
        if (this.head.data === data) {
            this.head = head.next;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }

    }
}
list = new linkedList();
for (let i = 0; i <= 10; i++) {
    list.add(i);
}
list.remove(10);
list.display();

//todo Activity 2: Stack
//* Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
    constructor() {
        this.head = null;
    }
    push(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    pop() {
        if (this.head) {
            let d = this.head.data;
            this.head = this.head.next;
            return d;
        }
    }
    peek() {
        return this.head.data;
    }
}

//* Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
function reverseString(str) {
    if (str.length > 0) {
        let myStack = new Stack();
        for (let i = 0; i < str.length; i++) {
            myStack.push(str[i]);
        }
        let revStr = "";
        while (myStack.head) {
            revStr += myStack.pop();
        }
        return revStr;
    }
}
console.log(`Reverse of Hello World is ${reverseString("Hello World")}`);

//todo Activity 3: Queue
//* Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
    constructor() {
        this.head = null;
        this.rear = null;
    }
    enqueue(data) {
        let newNode = new Node(data);
        if (!this.rear) {
            this.head = this.rear = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    dequeue() {
        if (!this.head || !this.rear) {
            return null;
        }
        else {
            let d = this.head.data;
            this.head = this.head.next;
            return d;

        }
    }
    front() {
        return this.head.data;
    }

}


//* Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
let queue = new Queue();
for (let i = 0; i < 4; i++) {
    queue.enqueue(`Print Job ${i + 1}`);
    console.log(`Print Job ${i + 1} added to queue`);

}
for (let i = 0; i < 4; i++) {
    console.log(`${queue.dequeue()} Job done`);
}

//todo Activity 4: Binary Tree
//* Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
    constructor(data) {
        this.data = data;
        this.right = this.left = null;
    }
}
//* Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.


class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(d) {
        const insert = (node, value) => {
            if (node === null) {
                return new TreeNode(value);
            }
            if (value < node.data) {
                node.left = insert(node.left, value);
            } else if (value > node.data) {
                node.right = insert(node.right, value);
            }
            return node;
        };
        this.root = insert(this.root, d);
    }

    inorder() {
        const traverse = (node) => {
            if (node === null) {
                return;
            }
            traverse(node.left);
            console.log(`${node.data} => `);
            traverse(node.right);
        };
        traverse(this.root);
    }
}

const tree = new BinaryTree();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(3);
tree.add(7);
tree.inorder(); // Output: 3 => 5 => 7 => 10 => 15 =>
