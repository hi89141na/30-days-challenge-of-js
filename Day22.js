//! Day 22: LeetCode Medium
//! Tasks/Activities:
//todo Activity 1: Add Two Numbers
//* Task 1: Solve the "Add Two Numbers problem on LeetCode.
//* • Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
//* • Create a few test cases with linked lists and log the sum as a linked list.

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
function reverseList(list) {
    let curr = list.head;
    let prev = null;
    let Next = null;
    while (curr != null) {
        Next = curr.next;
        curr.next = prev;
        prev = curr
        curr = Next
    }
    list.head = prev;
    return list;
}
function addNumbers(list1, list2) {
    list1 = reverseList(list1);
    list2 = reverseList(list2);
    let n1 = "";
    let n2 = "";
    let temp = list2.head;
    while (temp != null) {
        n1 += temp.data.toString();
        temp = temp.next;
    }
    temp = list2.head;
    while (temp != null) {
        n2 += temp.data.toString();
        temp = temp.next;
    }
    n1 = Number(n1);
    n2 = Number(n2);
    return n1 + n2;
}
let l1 = new linkedList();
let l2 = new linkedList();
for (let i = 1; i <= 3; i++) {
    l1.add(i);
    l2.add(i);
}
console.log(addNumbers(l1, l2));// Output: 642

//todo Activity 2: Longest Substring Without Repeating Characters
//* Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
//* Write a function that takes a string and returns the length of the longest substring without repeating characters. • Log the length for a few test cases, including edge cases.
function findTheLongestSubStr(s) {
    const lastIndex = new Array(256).fill(-1);
    let start = 0;
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);
        if (lastIndex[charCode] >= start) {
            start = lastIndex[charCode] + 1;
        }
        lastIndex[charCode] = i;
        maxLength = Math.max(maxLength, i - start + 1);

    }
    return maxLength;
}
console.log(findTheLongestSubStr("abcabcbb")); // Expected output: 3 ("abc")
console.log(findTheLongestSubStr("bbbbb"));    // Expected output: 1 ("b")
console.log(findTheLongestSubStr("pwwkew"));   // Expected output: 3 ("wke")
console.log(findTheLongestSubStr(""));          // Expected output: 0 (empty string)
console.log(findTheLongestSubStr("a"));         // Expected output: 1 ("a")

//todo Activity 3: Container With Most Water
//* Task 3: Solve the "Container With Most Water" problem on LeetCode.
//* Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
//* • Log the maximum amount of water for a few test cases.
function calculateMaxWater(arr) {
    let maxWater = 0;
    let left = 0;
    let right = arr.length - 1;
    let currArea = 0;
    while (left < right) {

        currArea = Math.min(arr[left], arr[right]) * (right - left);
        maxWater = Math.max(maxWater, currArea);
        if (arr[left] <= arr[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxWater;
}
console.log(calculateMaxWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(calculateMaxWater([1, 1]));
//todo Activity 4: 3Sum
//* Task 4: Solve the "3Sum" problem on LeetCode.
//* Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero. • Log the triplets for a few test cases, including edge cases.
//todo Activity 5: Group Anagrams
//* Task 5: Solve the "Group Anagrams" problem on LeetCode. Write a function that takes an array of strings and groups anagrams together.
//* • Log the grouped anagrams for a few test cases.
function sum3(arr) {
    let triplets = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if (sum === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);
                left++;
            }
            else if (sum > 0) {
                right--;
            }
            else {
                left++;
            }
        }
    }
    return triplets;
}
console.log(sum3([10,5,1,0,-2,-8,-2,-9]));
//Output: [ [ -8, -2, 10 ], [ -8, -2, 10 ] ]

