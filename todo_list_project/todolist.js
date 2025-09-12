// Your Todo List App implementation will go here!
let todos = [];
let currentFilter; // 'all', 'active', or 'completed'

let mainElement = document.querySelector("main");
let formElement = document.querySelector("#todo-form");
let inputElement = document.querySelector("#todo-input");
let addTodoElement = document.querySelector(".add-btn");
let filterButtons = document.querySelectorAll(".filter-btn");
let todoList = document.querySelector("ul");


// Convert date/time into readable format
function formatDate() {
  const today = Date.now();
  const dateObject = new Date(today);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");
  const hours = String(dateObject.getHours()).padStart(2, "0");
  const minutes = String(dateObject.getMinutes()).padStart(2, "0");
  const seconds = String(dateObject.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Toggles CSS classes on all, active, completed buttons
for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", filterButtonFunction);
}



function filterButtonFunction(event) {
  let activeButton = document.querySelector(".active");
  if (activeButton) {
    activeButton.classList.remove("active");
  }
  this.classList.add("active");
  console.log(filterButtons);
}

// Add ToDo functionality
formElement.addEventListener("click", addTodo);


// ADD TODO ITEM TO LIST
function addTodo() {
  const newTodo = inputElement.value;

  if (newTodo && newTodo.length >= 3) {
    const todoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
      createdAt: formatDate(),
    };

    todos.push(todoItem);

    // Adds todo item (list item) to todo list
    const li = document.createElement("li");
    li.classList.add("todo-item");
    todoList.appendChild(li);

    // Adds checkbox to todo item
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("todo-checkbox");
    li.appendChild(checkBox);

    // Adds text description to todo item
    const todoText = document.createElement("span");
    todoText.classList.add("todo-text");
    todoText.textContent = newTodo;
    li.appendChild(todoText);

    // Add div element to house edit and delete buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("todo-actions");
    li.appendChild(buttonsDiv);

    // Add edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    // editButton.addEventListener("click", editTask);
    buttonsDiv.appendChild(editButton);

    // Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", deleteTodo);
    buttonsDiv.appendChild(deleteButton);

    // Updates local storage for when the app was last updated
    localStorage.setItem("todoAppLastUpdated", formatDate());

    // Updates local storage todos array with newest addition
    localStorage.setItem("todos", JSON.stringify(todos));

    inputElement.value = "";
  } else {
    console.log("Your to do item must be at least 3 characters.");
  }
}


// DELETE TODO ITEM FROM LIST
function deleteTodo(event)
{
    localStorage.setItem("todoAppLastUpdated", formatDate());
    console.log(todos);
    console.log(typeof todos);
    const localData = JSON.parse(localStorage.getItem("todos"));
    console.log(localData);
    console.log(typeof localData);
}