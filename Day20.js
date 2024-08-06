//! Day 20: LocalStorage and SessionStorage
//! Tasks/Activities:
//todo Activity 1: Understanding LocalStorage
//* Task 1: Write a script to save a string value to localstorage and retrieve it. Log the retrieved value.
let str = "here is my string";
localStorage.setItem("myKey", str);
console.log(localStorage.getItem("myKey")); // Output: "here is my string"
//* Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
let obj = { name: "John", age: 30 };
localStorage.setItem("obj", JSON.stringify(obj));
let objStr = localStorage.getItem("obj");
console.log(JSON.parse(objStr));
//todo Activity 2: Using LocalStorage
//* Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load. 
function displayData() {
    let name = localStorage.getItem("name");
    let email = localStorage.getItem("email");
    if (name && email) {
        document.getElementById('result').innerHTML =
            `<h3>Saved Data</h3>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>`;
    }
}
let form = document.querySelector("#myForm");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    displayData();

});
window.onload = displayData;
//* Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
console.log(`Name: ${localStorage.getItem("name")}
Email: ${localStorage.getItem("email")}`);
localStorage.removeItem("name");
console.log(`Name: ${localStorage.getItem("name")}
Email: ${localStorage.getItem("email")}`);
//todo Activity 3: Understanding SessionStorage
//* Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
let name = "Ali";
let age = 20;
sessionStorage.setItem("name", name);
sessionStorage.setItem("age", age);
console.log(sessionStorage.getItem("name")); // Output: "Ali
console.log(sessionStorage.getItem("age")); // Output: 20
//* Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
let myObj = {
    rollno: 44,
    marks: 90
}
sessionStorage.setItem("myObj", JSON.stringify(myObj));
let myObjStr = sessionStorage.getItem("myObj");
console.log(JSON.parse(myObjStr));
//todo Activity 4: Using SessionStorage
//* Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
function displayData2() {
    let name = sessionStorage.getItem("name");
    let email = sessionStorage.getItem("email");
    if (name && email) {
        document.getElementById('result').innerHTML =
            `<h3>Saved Data</h3>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>`;
    }
}
let myForm = document.querySelector("#myForm");
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    displayData2();

});
window.onload = displayData2;
//* Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
console.log(`Name: ${sessionStorage.getItem("name")}
Email: ${sessionStorage.getItem("email")}`
);
sessionStorage.removeItem("name");
console.log(`Name: ${sessionStorage.getItem("name")}
Email: ${sessionStorage.getItem("email")}`);
//todo Activity 5: Comparing LocalStorage and Session Storage
//* Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function saveToStorage(key, value) {
    sessionStorage.setItem(key, value);
    localStorage.setItem(key, value);
}
saveToStorage("myKey", "myValue");
sessionStorage.getItem("myKey");
localStorage.getItem("myKey");
//* Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearStorage() {
    localStorage.clear();
    sessionStorage.clear();
}
