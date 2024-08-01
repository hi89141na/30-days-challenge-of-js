//! Day 16: Recursion
//! Tasks/Activities:
//todo Activity 1: Basic Recursion
//* Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function fact(num) {
    if (num === 0) return 1;
    return num * fact(num - 1);
}
console.log(`Factorial of 5 is ${fact(5)}`);
console.log(`Factorial of 10 is ${fact(10)}`);
console.log(`Factorial of 15 is ${fact(15)}`);
//* Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fib(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
console.log(`Fibonacci of 5 is ${fib(5)}`);
console.log(`Fibonacci of 10 is ${fib(10)}`);

//todo Activity 2: Recursion with Arrays
//* Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sum(a, b) {
    return a + b;
}
function sumArr(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return sum(arr[0], sumArr(arr.slice(1)));

}
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, -1, 3, -3, 2, -2];
let arr3 = [5, 2, 7, 4, 2, 6];
console.log(`Sum of array ${arr1} is ${sumArr(arr1)} `);
console.log(`Sum of array ${arr2} is ${sumArr(arr2)} `);
console.log(`Sum of array ${arr3} is ${sumArr(arr3)} `);

//* Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxArr(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    return Math.max(arr[0], maxArr(arr.slice(1)));
}
console.log(`Maximum of array ${arr1} is ${maxArr(arr1)} `);
console.log(`Maximum of array ${arr2} is ${maxArr(arr2)} `);
console.log(`Maximum of array ${arr3} is ${maxArr(arr3)} `);


//todo Activity 3: String Manipulation with Recursion
//* Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
    if (str.length === 0) {
        return "";
    }
    return reverseString(str.slice(1)) + str[0];
}
console.log(`Reversed string "Hello" is ${reverseString("Hello")}`);
console.log(`Reversed string "World" is ${reverseString("World")}`);

//* Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, str.length - 1));
}
console.log(`Is "radar" a palindrome? ${isPalindrome("radar")}`);
console.log(`Is "hello" a palindrome? ${isPalindrome("hello")}`);

//todo Activity 4: Recursive Search
//* Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function search(arr, s) {
    if (arr.length === 0) {
        return -1;  
    }
    let mid = Math.floor(arr.length / 2);  
    if (arr[mid] === s) {
        return mid;
    } else if (arr[mid] > s) {
        return search(arr.slice(0, mid), s);
    } else {
        let result = search(arr.slice(mid + 1), s);
        return result === -1 ? -1 : mid + 1 + result;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12];

console.log(`Index of 12 in array ${arr} is ${search(arr, 12)}`);
console.log(`Index of -2 in array ${arr} is ${search(arr, -2)}`);
//* Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function find(arr, s){
    if(arr.length === 0){
        return 0;
        }
        let count = (arr[0] === s) ? 1 : 0;
        return count + find(arr.slice(1), s);
}
arr = [1, 2, 3, 1, 5, 1, 1, 1, 9, 12];
console.log(`Count of 1 in array ${arr} is ${find(arr, 1)}`);
console.log(`Count of 0 in array ${arr} is ${find(arr, 0)}`);