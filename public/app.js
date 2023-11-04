const todosEl = document.getElementById("todos");

const todosForm = document.getElementById("todos-form");
todosForm.addEventListener("submit", appendTodo);

function appendTodo(e) {
  e.preventDefault();
  console.log(e.target[0].value);
  if (e.target[0].value !== "") {
    appendTodo(e.target[0].value);
  }
  e.target[0].value = "";
}

function createEditBtn() {
  const editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.value = "edit";
  editBtn.innerText = "Edit";
  return editBtn;
}

function createDeleteBtn() {
  const delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.value = "delete";
  delBtn.innerText = "Delete";
  return delBtn;
}

function createParagraphTag(todoStr) {
  const p = document.createElement("p");
  p.value = "todo";
  p.innerText = todoStr;
  return todoStr;
}

function createTodo(todoStr) {
  const listEl = document.createElement("li");
  listEl.value = todoStr;
  listEl.appendChild(createParagraphTag(todoStr));
  listEl.appendChild(createEditBtn());
  listEl.appendChild(createDeleteBtn());
  return listEl;
}

function appendTodo(todo, todos = todosEl) {
  todos.appendChild(createTodo(todo));
}
