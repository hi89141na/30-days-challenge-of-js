//! Day 13: Modules
//! Tasks/Activities:
//todo Activity 1: Creating and Exporting Modules
//* Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
//Module created in modules.js and is imported here 
import {add} from "./modules.js";
console.log(add(5, 7)); // Outputs: 12
//* Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
import {person} from "./modules.js";
person.greet();
//todo Activity 2: Named and Default Exports
//* Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
import { difference, product } from "./modules.js";
console.log(difference(10, 5)); // Outputs: 5
console.log(product(2, 3));//Output: 6
//* Task 4: Create a module that exports a single function using default export. Import and use this function in another script.b
import day from "./modules.js";
console.log(`Today is ${day(1)}`);
//todo Activity 3: Importing Entire Modules
//* Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
import * as module from "./modules.js";
console.log(module.person);
//todo Activity 4: Using Third-Party Modules

