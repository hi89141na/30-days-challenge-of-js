
//* Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script. 
import  _ from 'lodash';
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkedArray = _.chunk(array, 3);
console.log(chunkedArray);
// Output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]

  
//* Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
// js/script.js

import axios from 'axios';

axios
.get("https://api.example.com/data")
.then((response) => {
console.log(response.data); })
.catch((err) => {
console.error("Error fetching data:", err);
});
