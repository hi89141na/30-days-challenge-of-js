//! Day 12: Error Handling
//! Tasks/Activities:
//todo Activity 1: Basic Error Handling with Try-Catch
//* Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console. 
let myFun = function () {
    throw new error("Some error occurred");
}
try {
     myFun();
}
catch (err) {
    console.log(err);
}
//* Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
let divider = function (a, b) {
    if (b === 0) {
        throw new error("Cannot divide by zero");
    }
    else {
        return a / b;
    }
}
try {
    console.log(divider(10, 5));
     console.log(divider(10, 0));
}
catch (err) {
    console.log(err);
}
//todo Activity 2: Finally Block
//* Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
    console.log("Try block executed");
     myFun();
}
catch (err) {
    console.log("Catch block executed");
    console.log(err);
}
finally {
    console.log("Finally block executed");
}
//todo Activity 3: Custom Error Objects
//* Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class err extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
let customFun = function () {
    throw new err("Custom error occurred");
}
try {
    customFun();
}
catch (error) {
    console.log(error.message);
    console.log(error.name);
}

//* Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
let validateInput = function (input) {
    if (input === "") {
        throw new err("Input cannot be empty");
    }
}
try {
    validateInput("");
}
catch (error) {
    console.log(error.message);
    console.log(error.name);
}
//todo Activity 4: Error Handling in Promises
//* Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console.
let promise = new Promise((resolve, reject) => {
    let random = Math.random();
    if (random < 0.5) {
        resolve("Promise resolved");
    }
    else {
        reject("Promise rejected");
    }
});
promise.then((result) => {
    console.log(result);
})
    .catch((error) => {
        console.log(error);
    });

//* Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function asyncFun() {
    try {
        let promise = new Promise((resolve, reject) => {
            let random = Math.random();
            if (random < 0.5) {
                resolve("Promise resolved");
            }
            else {
                reject("Promise rejected");
            }
        });
        let result = await promise;
        console.log(result);
    }
    catch (error) {
        console.log(error.message);
    }
}
asyncFun();

//todo Activity 5: Graceful Error Handling in Fetch
//* Task 8: Use the fetch API to request data from an invalid URL and handle the error using catch(). Log an appropriate error message to the console.
fetch('https://invalid-url.com')
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
//* Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchFun() {
    try {
        let response = await fetch('https://invalid-url.com');
        let data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error('Error:', error.message);
    }
}
fetchFun();
