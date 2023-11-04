const todosEl = document.getElementById("todos");


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

function createTodo(todoStr, todos = todosEl) {
  const listEl = document.createElement("li");
  listEl.value = todoStr;
  listEl.appendChild(createParagraphTag(todoStr));
  listEl.appendChild(createEditBtn());
  listEl.appendChild(createDeleteBtn());
  todos.appendChild(listEl);
}
