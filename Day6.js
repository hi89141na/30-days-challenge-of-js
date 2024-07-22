//! Day 6: Arrays
//! Tasks/Activities:
//todo Activity 1: Array Creation and Access
//* Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let arr = [1, 2, 3, 4, 5];
console.log(`Array from 1 to 5: ${arr}`);
//? Output: Array from 1 to 5: 1,2,3,4,5
//* Task 2: Access the first and last elements of the array and log them to the console.
console.log(`First Element: ${arr[0]} and Last Element: ${arr[arr.length - 1]}`);
//? Output:First Element: 1 and Last Element: 5
//todo Activity 2: Array Methods (Basic)
//* Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr.push(6);
console.log(`Updated Array after using push: ${arr}`);
//? Output: Updated Array after using push: 1,2,3,4,5,6
//* Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop();
console.log(`Updated Array after using pop: ${arr}`);
//? Output: Updated Array after using pop: 1,2,3,4,5
//* Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift();
console.log(`Updated Array after using shift: ${arr}`);
//? Output: Updated Array after using shift: 2,3,4,5
//* Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(10);
console.log(`Updated Array after using unshift: ${arr}`);
//? Output: Updated Array after using unshift: 10,2,3,4,5   
//todo Activity 3: Array Methods (Intermediate)
//* Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let arr2 = [1, 2, 3, 4, 5];
let newArr = arr.map((i) => {
    return i * 2
});
console.log(`Array using map: ${newArr}`);
//? Output: Array using map: 20,4,6,8,10
//* Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let filteredArray = arr2.filter((i) => {
    if (i % 2 === 0) {
        return i;
    }
});
console.log(`Filtered array having even numbers: ${filteredArray}`);
//? Output: Filtered array having even numbers: 2,4
//* Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum = arr2.reduce((acc, curr) => {
    return acc + curr
}, 0);
console.log(`Sum of all numbers in the array: ${sum}`);
//? Output: Sum of all numbers in the array: 15
//todo Activity 4: Array Iteration
//* Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < arr.length; i++) {
    console.log(`Element at index ${i} is ${arr[i]}`);
}
/** 
*? Output: 
*?  Element at index 0 is 10
*? Element at index 1 is 2
*? Element at index 2 is 3
*? Element at index 3 is 4
*? Element at index 4 is 5*/
//* Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr.forEach((element, index) => {
    console.log(`Element at index ${index} is ${element}`);
});
/** 
*? Output: 
*?  Element at index 0 is 10
*? Element at index 1 is 2
*? Element at index 2 is 3
*? Element at index 3 is 4
*? Element at index 4 is 5*/
//todo Activity 5: Multi-dimensional Arrays
//* Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix =
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
    console.log(matrix);
//* Task 13: Access and log a specific element from the two-dimensional array.
console.log(`Element at row 1 and column 1 is: ${matrix[0][0]}`);