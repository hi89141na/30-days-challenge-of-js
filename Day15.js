//! Day 15: Closures
//! Tasks/Activities:
//todo Activity 1: Understanding Closures
//* Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFunction() {
    let message = "Hello";
    function innerFunction() {
        console.log(message);
    }
    return innerFunction;
}
let fun = outerFunction();
fun(); // Output: Hello
//* Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        }
    }
}
let counter = createCounter();
counter.increment(); // Increment the counter
console.log(`Value of counter is ${counter.getCount()}`); // Output: 1


//todo Activity 2: Practical Closures
//* Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function idGenerator() {
    let id = 0;
    return function () {
        id++;
        return id;
    }
}
let ids = [];
const generateId = idGenerator();
for (let i = 0; i < 10; i++) {
    ids.push(generateId());
}
console.log(`Generated Ids are ${ids}`); // Output: [1, 2, 3, 4,5, 6,7 8, 9, 10]

//* Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function greetUser() {
    let name = prompt("Enter your name");
    function greet() {
        console.log(`Hello, ${name}!`);
    }
    return greet;
}
let greet = greetUser();
greet(); // Output: Hello, [name]!
//todo Activity 3: Closures in Loops
//* Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function closureInLoop() {
    let functions = [];
    for (let i = 0; i < 10; i++) {
        functions.push(function () {
            console.log(i);
        });
    }
    return functions;
}
let functions = closureInLoop();
//* Calling each function to see the output
for (let i = 0; i < functions.length; i++) {
    functions[i]();
}

//todo Activity 4: Module Pattern
//* Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function moduleCreator() {
    let items = [];
    return {
        add: function (item) {
            items.push(item);
        },
        remove: function (item) {
            let index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
            }
        },
        list: function () {
            return items.slice();
        }
    }
}
let myModule = moduleCreator();
for (let i = 0; i < 10; i++) {
    myModule.add(`item ${i + 1}`);
}
console.log(myModule.list());

myModule.remove("item 1");
console.log(myModule.list());

//todo Activity 5: Memoization
//* Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log("Fetching from cache:", key);
            return cache[key];
        }

        console.log("Calculating result for:", key);
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}
function slowFunction(num) {
    return num * 2;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5));  //* Calculates and returns 10
console.log(memoizedSlowFunction(5));  //* Fetches the result from cache
console.log(memoizedSlowFunction(10)); //* Calculates and returns 20
console.log(memoizedSlowFunction(10)); //* Fetches the result from cache

//* Task 8: Create a memoized version of a function that calculates the factorial of a number.
function fact(num) {
    if (num === 0) return 1;
    return num * fact(num - 1);
}
function memoizedFact(fn) {
    const cache = {};
    return function (num) {
        const key = num;
        if (cache[key]) {
            console.log("Fetching from cache:", key);
            return cache[key];
        }
        console.log("Calculating result for:", key);
        const result = fn(num);
        cache[key] = result;
        return result;
    }
}
let factorial = memoizedFact(fact);
console.log(factorial(5));  //* Calculates and returns 120
console.log(factorial(5));  //* Fetches the result from cache