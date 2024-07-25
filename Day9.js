//! Day 9: DOM Manipulation
//! Tasks/Activities:
//** Activity 1: Selecting and Manipulating Elements
//* Task 1: Select an HTML element by its ID and change its text content.
let element = document.getElementById("heading");
element.textContent = "Day 9 of JS Challenge!"; // Change the text content of the element to "Day 9 of JS Challenge!"
//* Task 2: Select an HTML element by its class and change its background color.
let box = document.querySelector(".box");
box.style.background = "blue";
//** Activity 2: Creating and Appending Elements
//* Task 3: Create a new div element with some text content and append it to the body.
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div element!"
document.body.appendChild(newDiv);
//* Task 4: Create a new li element and add it to an existing ul list.
let newLi = document.createElement("li");
newLi.textContent = "This is a new li element!"
document.querySelector("ul").appendChild(newLi);
//** Activity 3: Removing Elements
//* Task 5: Select an HTML element and remove it from the DOM.
let rem = document.querySelector("h1");
rem.remove();
//* Task 6: Remove the last child of a specific HTML element.
let lastChild = document.querySelector("ul").lastChild;
lastChild.remove();
//** Activity 4: Modifying Attributes and Classes
//* Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
let img = document.querySelector("img");
img.src = "http://thewowstyle.com/wp-content/uploads/2015/01/nature-images-6.jpg";
//* Task 8: Add and remove a CSS class to/from an HTML element.
let div = document.querySelector("div");
div.classList.remove("box2");
//** Activity 5: Event Handling
//* Task 9: Add a click event listener to a button that changes the text content of a paragraph.
let button = document.querySelector("button");
button.addEventListener("click", () => {
    let para = document.querySelector(".para");
    para.textContent = "Button was clicked";
});
//* Task 10: Add a mouseover event listener to an element that changes its border color
let image = document.querySelector("img");
image.addEventListener("mouseover", () => {
    image.style.border = "5px solid red";
});
















