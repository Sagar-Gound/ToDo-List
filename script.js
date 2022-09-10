"use strict";
const addTodoBtn = document.querySelector("#addTodoBtn");
const todoContainer = document.querySelector(".todoContainer");
const todoList = document.querySelector(".todoList");
const inputContainer = document.querySelector(".inputContainer");

inputContainer.addEventListener("input", () => {
  if (todoInput.value.length > 0) {
    addTodoBtn.removeAttribute("disabled");
  } else {
    addTodoBtn.setAttribute("disabled", "disabled");
  }
});

addTodoBtn.addEventListener("click", () => {
  const todoInput = document.querySelector("#todoInput");

  if (todoInput.value !== "") {
    const inputValue = todoInput.value;
    //Creating Div element
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Creating li
    const todoLi = document.createElement("li");
    todoLi.classList.add("todoItem");
    todoLi.innerText = inputValue;
    // Appending li to div
    todoDiv.appendChild(todoLi);
    //Creation of complete button
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("completeBtn");
    completeBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    todoDiv.appendChild(completeBtn);
    //Creation of trash button
    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trashBtn");
    trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    todoDiv.appendChild(trashBtn);
    //Appending li items to ul
    todoList.appendChild(todoDiv);
    todoInput.value = "";
    todoInput.focus();
    addTodoBtn.setAttribute("disabled", "disabled");
  } else {
    todoInput.focus();
    addTodoBtn.setAttribute("disabled", "disabled");
  }
});

// const trashBtn = document.querySelector(".trashBtn");
todoList.addEventListener("click", (e) => {
  const item = e.target;
  if (item.classList[0] === "trashBtn") {
    const todo = item.parentElement;
    todo.remove();
  }

  if (item.classList[0] === "completeBtn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
});
