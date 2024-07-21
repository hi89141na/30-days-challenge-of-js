//! Day 5: Functions
//! Tasks/Activities:

// todo Activity 1: Function Declaration

//* Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(number + ' is even');
    } else {
        console.log(number + ' is odd');
    }
}
checkEvenOrOdd(4); // Output: 4 is even
checkEvenOrOdd(7); // Output: 7 is odd

//* Task 2: Write a function to calculate the square of a number and return the result.
function calculateSquare(number) {
    return number * number;
}
console.log(calculateSquare(5)); // Output: 25
console.log(calculateSquare(9)); // Output: 81

// todo Activity 2: Function Expression

//* Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + ' is the maximum');
    } else if (num1 < num2) {
        console.log(num2 + ' is the maximum');
    } else {
        console.log('Both numbers are equal');
    }
};
findMax(10, 15); // Output: 15 is the maximum
findMax(20, 20); // Output: Both numbers are equal

//* Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};
console.log(concatenateStrings('Hello, ', 'World!')); // Output: Hello, World!

// todo Activity 3: Arrow Functions

//* Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a, b) => a + b;
console.log(sum(5, 7)); // Output: 12

//* Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsCharacter = (str, char) => str.includes(char);
console.log(containsCharacter('Hello', 'e')); // Output: true
console.log(containsCharacter('World', 'a')); // Output: false

// todo Activity 4: Function Parameters and Default Values

//* Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 3)); // Output: 15
console.log(multiply(5));    // Output: 5

//* Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = 18) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}
console.log(greet('John', 25)); // Output: Hello, my name is John and I am 25 years old.
console.log(greet('Jane'));     // Output: Hello, my name is Jane and I am 18 years old.

// todo Activity 5: Higher-Order Functions

//* Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
repeatFunction(() => console.log('Hello'), 3); // Output: Hello (printed 3 times)

//* Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}
const double = x => x * 2;
const addFive = x => x + 5;
console.log(applyFunctions(double, addFive, 10)); // Output: 25
