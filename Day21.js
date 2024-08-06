//! Day 21: LeetCode Easy
//! Tasks/Activities:
//todo Activity 1: Two Sum
//* Task 1: Solve the "Two Sum" problem on LeetCode.
//* Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
//* Log the indices for a few test cases.
function twoSum(myArr, s) {
    let arr = [...myArr];
    let indexMap = new Map();
    arr.forEach((num, index) => {
        indexMap.set(num, index)
    });
    arr = arr.sort();
    let left = 0, right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === s) {
            console.log(`Indices of two numbers of ${myArr} that add up to ${s}: ${indexMap.get(arr[left])} and ${indexMap.get(arr[right])}`);
            return [indexMap.get(arr[left]), indexMap.get(arr[right])];
        } else if (sum < s) {
            left++;
        } else {
            right--;
        }
    }
    return null;
}
// Test cases
twoSum([9, 2, 3, 5, 6, 7], 10);
twoSum([1, 9, 4, -9, 6, 7], 0);
//todo Activity 2: Reverse Integer
//* Task 2: Solve the "Reverse Integer" problem on LeetCode.
//* • Write a function that takes an integer and returns it with its digits reversed.
//* • Handle edge cases like negative numbers and numbers ending in zero.
//* • Log the reversed integers for a few test cases.
function reverseInteger(n) {
    let sign = n < 0 ? -1 : 1;
    n = Math.abs(n);
    let reversed = 0;
    while (n > 0) {
        let digit = n % 10;
        reversed = reversed * 10 + digit;
        n = Math.floor(n / 10);
    }
    return sign * reversed;
}
// Test cases
console.log(reverseInteger(1230));
console.log(reverseInteger(-456));

//todo Activity 3: Palindrome Number
//* Task 3: Solve the "Palindrome Number" problem on LeetCode.
//* Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
//* • Log the result for a few test cases, including edge cases like negative numbers.
function isPalindrome(n) {
    n = Math.abs(n);
    let str = n.toString();
    let reversed = str.split('').reverse().join('');
    if (str === reversed) {
        return true;
    }
    else {
        return false;
    }
}
// Test cases
console.log(isPalindrome(12321)); // Expected output: true
console.log(isPalindrome(-12321)); // Expected output: true

//todo Activity 4: Merge Two Sorted Lists
//* Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
//* • Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
//* • Create a few test cases with linked lists and log the merged list.
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
let list1 = new linkedList();
let list2 = new linkedList();
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        list1.add(i);
    }
    else {
        list2.add(i);
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
console.log(mergeLists(list1, list2).display());
//todo Activity 5: Valid Parentheses
//* Task 5: Solve the "Valid Parentheses" problem on LeetCode.
//* Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and 'J', and determines if the input string is valid. A string is valid if open brackets are closed in the correct order.
//* • Log the result for a few test cases.

function isValid(str) {
    let stack = [];
    const map = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    for (char of str) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        }
        else if ([')', '}', ']'].includes(char)) {
            if (stack.length === 0 || stack.pop() !== map[char]){
                return false;
            }
        }
    }
    return stack.length===0;
}
// Test cases
console.log(isValid("(){}[]")); // Expected output: true
console.log(isValid("([{}])")); // Expected output: true
console.log(isValid("(]")); // Expected output: false
console.log(isValid("(((")); // Expected output: false
console.log(isValid("()[]{}")); // Expected output: true
console.log(isValid("([)]")); // Expected output: false