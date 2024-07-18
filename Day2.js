//! Day 2: Operators
//! Tasks/Activities:
//todo Activity 1: Arithmetic Operations
//* Task 1: Write a program to add two numbers and log the result to the console.
let a = 3;
let b = 2;
console.log(`The sum of ${a} and ${b} is ${a + b}`);
//*Task 2: Write a program to subtract two numbers and log the result to the console. 
console.log(`The difference of ${a} and ${b} is ${a - b}`);
//*Task 3: Write a program to multiply two numbers and log the result to the console.
console.log(`The product of ${a} and ${b} is ${a * b}`);
//*Task 4: Write a program to divide two numbers and log the result to the console.
console.log(`The division of ${a} with ${b} is ${a / b}`);
//*Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
console.log(`The remainder when ${a} is divided by ${b} id ${a % b}`);
//todo Activity 2: Assignment Operators
//*Task 6: Use the operator to add a number to a variable and log the result to the console.
let c = 10;
console.log(`The initial value of c is ${c}`);
c += 5;
console.log(`The value of c after adding 5 is ${c}`);
//*Task 7: Use the operator to subtract a number from a variable and log the result to the console.
console.log(`The initial value of c is ${c}`);
c -= 5;
console.log(`The value of c after subtracting 5 is ${c}`);
//todo Activity 3: Comparison Operators
//*Task 8: Write a program to compare two numbers using and and log the result to the console.
console.log(`The result of comparing 5 and 10 using > operator is ${5 < 10}`);
//*Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
console.log(`The result of comparing 5 and 10 using >= operator is ${5 >= 10}`);
//*Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let number1 = 5;
let number2 = '5'; // This is a string for demonstration purposes
if (number1 == number2) {
  console.log(`${number1} == ${number2} is true (equality operator).`);
} else {
  console.log(`${number1} == ${number2} is false (equality operator).`);
}

if (number1 === number2) {
  console.log(`${number1} === ${number2} is true (strict equality operator).`);
} else {
  console.log(`${number1} === ${number2} is false (strict equality operator).`);
}
//todo Activity 4: Logical Operators
//*Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
number1 = 5;
number2 = 10;
if (number1 < number2 && number1 !== number2) {
    console.log(`${number1} is less than ${number2} and they are not equal.`);
} else if (number1 > number2 && number1 !== number2) {
    console.log(`${number1} is greater than ${number2} and they are not equal.`);
} else if (number1 === number2) {
    console.log(`${number1} is equal to ${number2}.`);
} else {
    console.log(`Unexpected comparison result.`);    
}
//*Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
number1 = -5;
number2 = 10;
let condition1 = number1 > 0;  
let condition2 = number2 < 0;  
if (condition1 || condition2) {
  console.log(`At least one of the conditions is true.`);
} else {
  console.log(`Both conditions are false.`);
}
//*Task 13: Write a program that uses the operator to negate a condition and log the result to the console.
let condition = number2 > 10;  
if (!condition) {
  console.log(`The negated condition is true.`);
} else {
  console.log(`The negated condition is false.`);
}
//todo Activity 5: Ternary Operator
//*Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let num=10;
num>=0 ? console.log(`${num} is positive`):console.log(`${num} is negative`);