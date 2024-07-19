//! Day 3: Control Structures
//! Tasks/Activities:
//todo Activity 1: If-Else Statements
//* Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console. 
let number = 5;
if (number > 0) {
    console.log(`number ${number} is positive`);
}
else if (number < 0) {
    console.log(`number ${number} is negative`);
}
else if (number === 0) {
    console.log(`number ${number} is zero`);
}
else {
    console.log(`number ${number} is not a number`);
}
//* Task 2: Write a program to check if a person is eligible to vote (age > 18) and log the result to the console.
let age = 18;
if (age >= 18) {
    console.log(`You are eligible to vote`);
}
else {
    console.log(`You are not eligible to vote`);
}
//todo Activity 2: Nested If - Else Statements
//*Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 5;
let num2 = 10;
let num3 = 15;
if (num1 > num2) {
    if (num1 > num3) {
        console.log(`The largest number is ${num1}`);
    }
    else {
        console.log(`The largest number is ${num3}`);
    }
}
else {
    if (num2 > num3) {
        console.log(`The largest number is ${num2}`);
    }
    else {
        console.log(`The largest number is ${num3}`);
    }
}

//todo Activity 3: Switch Case
//* Task 4: Write a program that uses a switch case to determine the day of the week based on a number(1 - 7) and log the day name to the console.Task 5: Write a program that uses a switch case to assign a grade('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let day = 1;
switch (day) {
    case 1:
        console.log(`The day is Monday`);
        break;
    case 2:
        console.log(`The day is Tuesday`);
        break;
    case 3:
        console.log(`The day is Wednesday`);
        break;
    case 4:
        console.log(`The day is Thursday`);
        break;
    case 5:
        console.log(`The day is Friday`);
        break;
    case 6:
        console.log(`The day is Saturday`);
        break;
    case 7:
        console.log(`The day is Sunday`);
        break;
    default:
        console.log(`Invalid day`);
        break;
}

//todo   Activity 4: Conditional(Ternary) Operator
//* Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let num = 5;
console.log(num % 2 == 0 ? `The number is even` : `The number is odd`);
//todo Activity 5: Combining Conditions
//*Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2020;
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log(`The year ${year} is a leap year`);
}
else {
    console.log(`The year ${year} is not a leap year`);
}
