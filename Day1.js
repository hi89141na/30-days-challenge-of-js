//! Day 1: Variables and Data Types
//! Tasks/Activities:
// todo Activity 1: Variable Declaration
//* Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var a = 5;
console.log(`Value of a is ${a}`); // Output: Value of a is 5
//* Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let name = 'Hina';
console.log(`My Name is ${name}`); // Output: My Name is Hina
// todo Activity 2: Constant Declaration
//* Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const isTrue = true;
console.log(`isTrue is ${isTrue}`); // Output: isTrue is true
// todo Activity 3: Data Types
//* Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
const num = 5;
console.log(`Type of num is ${typeof num}`); // Output: Type of num is number
const str = 'Hina';
console.log(`Type of str is ${typeof str}`); // Output: Type of str is string
const bool = true;
console.log(`Type of bool is ${typeof bool}`); // Output: Type of bool is boolean
const obj = { name: 'Hina', age: 20 };
console.log(`Type of obj is ${typeof obj}`); // Output: Type of obj is object
const arr = [1, 2, 3];
console.log(`Type of arr is ${typeof arr}`); // Output: Type of arr is object
// todo Activity 4: Reassigning Variables
//* Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let b = 5;
console.log(`Initial value of b is ${b}`); // Output: Initial value of b is 5
b = 10;
console.log(`New value of b is ${b}`); // Output: New value of b is 10
// todo Activity 5: Understanding const
//* Task 6: Try reassigning a variable declared with const and observe the error.
const c = 10;
console.log(`Initial value of constant c is ${c}`); // Output: Initial value of constant c is 10
// c = 15; // Throws TypeError: Assignment to constant variable.
// console.log(`New value of constant c is ${c}`); // This line won't be reached due to the error above
