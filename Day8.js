//! Day 8: ES6+ Features
//!Tasks/Activities:

//** Activity 1: Template Literals

//* Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let myName = "Hina";
let myAge = 19;
let result = `Hello I'm ${myName} and my age is ${myAge}`;
console.log(result); 
// Output: Hello I'm Hina and my age is 19

//* Task 2: Create a multi-line string using template literals and log it to the console.
let myString = `Hey this is Hina,
I like coding and
currently learning JS `;
console.log(myString);
// Output: 
// Hey this is Hina,
// I like coding and
// currently learning JS

//** Activity 2: Destructuring

//* Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let numbers = [2, 5, 9, 1, 1];
let [n1, n2] = numbers;
console.log(n1, n2); 
// Output: 2 5

//* Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1995,
    pages: 256
};
let { title, author } = book;
console.log(title, author);
// Output: The Great Gatsby F. Scott Fitzgerald

//** Activity 3: Spread and Rest Operators

//*Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let arr = [1, 2, 3, 4, 5];
let newArr = [...arr, 6, 7, 8, 9, 10];
console.log(newArr); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//*Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
// Output: 36

//** Activity 4: Default Parameters

//*Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
let prod = function (a, b = 1) {
    return a * b;
}
console.log(prod(2)); 
// Output: 2
console.log(prod(2, 3)); 
// Output: 6

//**Activity 5: Enhanced Object Literals

//* Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const name = 'Alice';
const age = 25;
const person = { 
    name, 
    age,
    greet() {
        console.log(`Hello! I'm ${this.name} and my age is ${this.age}`);
    }
};

person.greet(); 
// Output: Hello! I'm Alice and my age is 25

//* Task 9: Create an object with computed property names based on variables and log the object to the console.
const propName1 = 'firstName';
const propName2 = 'lastName';
const propName3 = 'age';
const value1 = 'John';
const value2 = 'Doe';
const value3 = 30;

const object = {
  [propName1]: value1,
  [propName2]: value2,
  [propName3]: value3
};

console.log(object); 
// Output: { firstName: 'John', lastName: 'Doe', age: 30 }
