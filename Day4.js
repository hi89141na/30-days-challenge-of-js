//! Day 4: Loops
//! Tasks/Activities:

// todo Activity 1: For Loop

//* Task 1: Write a program to print numbers from 1 to 10 using a for loop.
console.log('Numbering from 1 to 10:');
for (let i = 1; i <= 10; i++) {
    console.log(i); // Output: 1 2 3 4 5 6 7 8 9 10
}

//* Task 2: Write a program to print the multiplication table of 5 using a for loop.
console.log('Multiplication table of 5:');
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x 5 = ${i * 5}`); // Output: 1 x 5 = 5, 2 x 5 = 10, ..., 10 x 5 = 50
}

// todo Activity 2: While Loop

//* Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(`Sum of numbers from 1 to 10: ${sum}`); // Output: Sum of numbers from 1 to 10: 55

//* Task 4: Write a program to print numbers from 10 to 1 using a while loop.
i = 10;
while (i >= 1) {
    console.log(i); // Output: 10 9 8 7 6 5 4 3 2 1
    i--;
}

// todo Activity 3: Do... While Loop

//* Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
console.log('Numbers from 1 to 5 using a do...while loop:');
let j = 1;
do {
    console.log(j); // Output: 1 2 3 4 5
    j++;
} while (j <= 5);

//* Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let num = 5;
let fact = 1;
do {
    fact *= num;
    num--;
} while (num > 0);
console.log(`Factorial of 5 is ${fact}`); // Output: Factorial of 5 is 120

// todo Activity 4: Nested Loops

//* Task 7: Write a program to print a pattern using nested for loops:
console.log('Pattern using nested for loops:');
for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line); // Output: * ** *** **** *****
}

// todo Activity 5: Loop Control Statements

//* Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
console.log('Numbers from 1 to 10, but skip the number 5:');
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i); // Output: 1 2 3 4 6 7 8 9 10
}

//* Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
console.log('Numbers from 1 to 10, but stop the loop when the number is 7:');
for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i); // Output: 1 2 3 4 5 6
}
