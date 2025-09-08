console.log("It's working!");

// Grab h1
const h1Element = document.querySelector("h1");

// Edit text content
h1Element.textContent = "Changed H1 tag to this";

// Element, NodeList, HTMLCollection

// NodeLists are returned from querySelectorAll

// Array.from(NodeList) - to access a single node/element
const h2NodeList = document.querySelectorAll("h2");
const h2Array = Array.from(h2NodeList);
h2Array[0].textContent = "Updated Index 0";

// Inner HTML to update internals of an element
const aside = document.querySelector("aside");
aside.innerHTML = "<h2>Did This Work</h2>";

// Create element that isn't attached to DOM
const divElementBefore = document.createElement("div");
divElementBefore.textContent = "This is our div we created before";
const divElementAfter = document.createElement("div");
divElementAfter.textContent = "This is our div we created after";
// Now attach it to something (aside section)

// Add before existing text
aside.prepend(divElementBefore);
// Add after existing text
aside.appendChild(divElementAfter);

// insertBefore(newNode, referenceNode)
//removeChild()
//remove()


// setAttribute, getAttribute
// Manipulating a class list
// classList.toggle
// Modifying Styles