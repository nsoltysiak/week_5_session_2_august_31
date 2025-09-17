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

// TOGGLE BETWEEN ALL, ACTIVE, AND COMPLETED
filterButtons.forEach(function(button)
{
    button.addEventListener('click', function()
    {
        const dataToggle = button.getAttribute("data-toggle");
        const tasks = document.querySelectorAll(".todo-item");

        // Adds/removes active class on toggle buttons
        let activeButton = document.querySelector(".active");
        if (activeButton) {
          activeButton.classList.remove("active");
        }
        this.classList.add("active");

        tasks.forEach(function (task)
        {
          const dataFilter = task.getAttribute("data-filter");
          if (dataToggle === "all" || dataFilter === dataToggle) {
            task.style.display = "flex";
          } else {
            task.style.display = "none";
          }
        });
    });
});

// FILTER LIST ITEMS UNDER ALL, ACTIVE, OR COMPLETED
function filterSelection(event)
{
    const checkbox = event.target;

    // Finds nearest parent/sibling element with class .todo-item
    const listItem = checkbox.closest('.todo-item');

    if (checkbox.checked)
    {
        listItem.classList.add('completed');
        listItem.setAttribute('data-filter', 'completed');
    }
    else
    {
        listItem.classList.remove('completed');
        listItem.setAttribute('data-filter', 'active');
    }

}

// ADD TODO EVENTLISTENER FUNCTIONALITY
formElement.addEventListener("click", addTodo);


// ADD TODO ITEM TO LIST
function addTodo() {
  const newTodo = inputElement.value.trim();

  if (newTodo && newTodo.length >= 3) {
    const todoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
      createdAt: formatDate(),
    };

    // Add todo item object into todos array
    todos.push(todoItem);

    // Adds todo item (list item) to todo list
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.setAttribute('data-filter','active');
    todoList.appendChild(li);

    // Adds checkbox to todo item
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("todo-checkbox");
    li.appendChild(checkBox);
    checkBox.addEventListener("change", filterSelection);
    console.log("checkBox: " + checkBox.type);

    // Adds text description to todo item
    const todoText = document.createElement("span");
    todoText.classList.add("todo-text");
    todoText.textContent = newTodo;
    todoText.addEventListener("click", editTodo);
    li.appendChild(todoText);

    // Add div element to house edit and delete buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("todo-actions");
    li.appendChild(buttonsDiv);

    // Add edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    editButton.addEventListener("click", editTodo);
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


// EDIT TODO ITEM FROM LIST
function editTodo(event)
{
  const editButton = event.target;
  // Finds nearest parent/sibling element with class .todo-item
  const listItem = editButton.closest(".todo-item");
  const spanText = listItem.querySelector("span");

  if (editButton.textContent === 'Edit')
  {
    const input = document.createElement("input");
    input.type = 'text';
    input.value = spanText.textContent;
    input.classList.add('todo-edit-input');

    listItem.replaceChild(input, spanText);

    editButton.textContent = 'Save';
  }
  else
  {
    const input = listItem.querySelector('.todo-edit-input');
    const todoText = document.createElement("span");
    todoText.textContent = input.value;
    todoText.classList.add("todo-text");
    listItem.replaceChild(todoText, input);
    editButton.textContent = 'Edit';
  }
}



// DELETE TODO ITEM FROM LIST
function deleteTodo(event)
{
  const deleteButton = event.target;

  // Finds nearest parent/sibling element with class .todo-item
  const listItem = deleteButton.closest(".todo-item");

  listItem.remove();
}