//! Day 10: Event Handling
//! Tasks/Activities:
//todo Activity 1: Basic Event Handling
//* Task 1: Add a click event listener to a button that changes the text content of a paragraph. 
let button = document.querySelector(".btn");
let para = document.querySelector(".para");
button.addEventListener("click", function () {
    para.textContent = "Button Clicked";
});
//* Task 2: Add a double-click event listener to an image that toggles its visibility.
let img = document.querySelector("img");
img.addEventListener("dblclick", function () {
    img.style.display = "none";
});
//todo Activity 2: Mouse Events
//* Task 3: Add a mouseover event listener to an element that changes its background color.
let box = document.querySelector(".box");
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "red";
});
//* Task 4: Add a mouseout event listener to an element that resets its background color.
box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "white";
});
//todo Activity 3: Keyboard Events
//* Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
let input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
    console.log(e.key);
});
//* Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
input.addEventListener("keyup", (e) => {
    console.log(e.key);
});
//todo Activity 4: Form Events
//* Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
let form = document.querySelector("#myForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(form.elements);
});
//* Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
form.addEventListener("change", (e) => {
    console.log(e.target.value);
});
//todo Activity 5: Event Delegation
//* Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
let list = document.querySelector("ul");
list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log(e.target.textContent);
    }
});

//* Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
let parent = document.querySelector("#parent");
parent.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("item")) {
        console.log('Clicked on ' + e.target.textContent);

    }
});
let count=3;
let addBtn = document.querySelector(".addItem");
addBtn.addEventListener("click", ()=>{
    let newItem = document.createElement("div");
    newItem.textContent=`Item ${++count}`;
    newItem.classList.add("item");
    parent.append(newItem);
})
