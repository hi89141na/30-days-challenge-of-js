//! Day 23: LeetCode Hard
//! Tasks/Activities:
//Todo Activity 1: Median of Two Sorted Arrays
//* Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
//* • Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
//* • Log the median for a few test cases, including edge cases.
function calculateMedian(arr1, arr2) {
    let merged = [...arr1, ...arr2].sort((a, b) => a - b);
    let length = merged.length;
    if (length % 2 === 0) {
        return [merged[Math.floor((length / 2) - 1)], merged[Math.floor(length / 2)]];
    }
    else {
        return merged[Math.floor(length / 2)];
    }
}
// Test cases
console.log(calculateMedian([1, 3], [2])); // Output: 2
console.log(calculateMedian([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])); // Output: [5,6]

//Todo Activity 2: Merge k Sorted Lists
//* Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
//* • Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list. • Create a few test cases with linked lists and log the merged list.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class linkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        if (!this.head) {
            this.head = new Node(data);
        }
        else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = new Node(data);
        }
    }
    remove(data) {
        if (this.head.data === data) {
            this.head = this.head.next;
        }

        let curr = this.head;
        while (curr.next) {
            if (curr.next.data === data) {
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        }
    }
    display() {
        let curr = this.head;
        while (curr != null) {
            console.log(curr.data);
            curr = curr.next;
        }

    }
}
function mergeLists(list1, list2) {
    let mergedList = new linkedList();
    let curr1 = list1.head;
    let curr2 = list2.head;
    while (curr1 && curr2) {
        if (curr1.data < curr2.data) {
            mergedList.add(curr1.data);
            curr1 = curr1.next;
        }
        else {
            mergedList.add(curr2.data);
            curr2 = curr2.next;
        }
    }
    while (curr1) {
        mergedList.add(curr1.data);
        curr1 = curr1.next;
    }
    while (curr2) {
        mergedList.add(curr2.data);
        curr2 = curr2.next;
    }
    return mergedList;
}
function mergeUnknownLists(...lists) {
    let mergedList = new linkedList();
    lists.forEach((list) => {
        mergedList = mergeLists(mergedList, list);
    });
    return mergedList;
}
// Test cases
let l1 = new linkedList();
let l2 = new linkedList();
let l3 = new linkedList();

for (let i = 0; i < 3; i++) {
    l1.add(i);
    l2.add(i + 3);
    l3.add(i + 6);
}
console.log("Merged List:");
mergeUnknownLists(l1, l2, l3).display();
let l4 = new linkedList();
let l5 = new linkedList();
l4.add(1);
l4.add(4);
l4.add(7);
l5.add(2);
l5.add(5);
l5.add(8);
console.log("Merged List with List 4 and List 5:");
mergeUnknownLists(l4, l5).display();

//Todo Activity 3: Trapping Rain Water
//* Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
//* • Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
//* • Log the amount of trapped water for a few test cases.
function trapWater(height) {
    let i = 0;
    let left_max = height[0];
    let j = height.length - 1;
    let right_max = height[j];
    let sum = 0;
    while (i < j) {
        if (left_max <= right_max) {
            sum += left_max - height[i];
            i++;
            left_max = Math.max(left_max, height[i]);
        }
        else {
            sum += right_max - height[j];
            j--;
            right_max = Math.max(right_max, height[j]);
        }
    }
    return sum;
}
console.log(trapWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));//Output: 6
console.log(trapWater([4, 2, 0, 3, 2, 5]));//Output:  9
//Todo Activity 4: N-Queens
//* Task 4: Solve the "N-Queens" problem on LeetCode.
//* • Write a function that places n queens on an non chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
//* • Log the distinct solutions for a few test cases.
function solveNQueens(n) {
    const results = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    function isValid(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
        }
        return true;
    }
    function solve(row) {
        if (row === n) {
            results.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                solve(row + 1);
                board[row][col] = '.'; // Backtrack
            }
        }
    }
    solve(0);
    return results;
}

// Example usage:
console.log(solveNQueens(4));
console.log(solveNQueens(5));

//Todo Activity 5: Word Ladder
//* Task 5: Solve the "Word Ladder" problem on LeetCode.
//* • Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
//* • Log the length of the shortest transformation sequence for a few test cases.
function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    const queue = [[beginWord, 1]];
    while (queue.length) {
        const [word, length] = queue.shift();

        if (word === endWord) return length;
        for (let i = 0; i < word.length; i++) {
            for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
                const nextWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                if (wordSet.has(nextWord)) {
                    queue.push([nextWord, length + 1]);
                    wordSet.delete(nextWord);
                }
            }
        }
    }
    return 0; // If no transformation sequence is found
}
// Example usage:
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "cog"])); // Output should be 5
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // Output should be 0