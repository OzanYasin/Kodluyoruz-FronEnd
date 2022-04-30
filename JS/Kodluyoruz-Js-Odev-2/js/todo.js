// Selectors

const todoBtn = document.querySelector("#todo-btn");
const todoInput = document.querySelector("#todo-input"); //todoInput = taskDOM (ornek-calisma)
const todoList = document.querySelector("#todo-list"); // todoList = listDOM (ornek-calisma)

// ------------------------------------------

// Event Listeners

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// ------------------------------------------

// Functions

function addTodo(event) {
  // Create todoDiv
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // Check Mark Button
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = "<i class='fas fa-check'></i>";
  completedBtn.classList.add("complete-btn");
  todoDiv.appendChild(completedBtn);
  // Trash Button
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = "<i class='fas fa-trash'></i>";
  trashBtn.classList.add("trash-btn");
  todoDiv.appendChild(trashBtn);
  // Append To List
  todoList.appendChild(todoDiv);
  // Clear Todo Input Value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // Delete Todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // Delete Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // Check Mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
