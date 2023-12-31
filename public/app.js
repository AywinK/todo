const todosEl = document.getElementById("todos");

const todosForm = document.getElementById("todos-form");
todosForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  if (e.target[0].value !== "") {
    appendTodo(e.target[0].value);
  }
  e.target[0].value = "";
});

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
  return p;
}

function createTodo(todoStr) {
  const listEl = document.createElement("li");
  listEl.appendChild(createParagraphTag(todoStr));
  listEl.appendChild(createEditBtn());
  listEl.appendChild(createDeleteBtn());
  return listEl;
}

function appendTodo(todo, todos = todosEl) {
  todos.appendChild(createTodo(todo));
}

todosEl.addEventListener("click", (e) => {
  console.log(e.target.value);

  if (e.target.value === "delete") {
    todosEl.removeChild(e.target.parentNode);
  }
  if (e.target.value === "edit") {
    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.value = e.target.parentNode.firstChild.innerText;
    e.target.parentNode.replaceChild(inputEl, e.target.parentNode.firstChild);
  }
  if (e.target.value==="todo") {
    e.target.classList.toggle("done");
    console.log(e.target);
  }
});

todosEl.addEventListener("keyup", (e) => {
  console.log(e);
  const val = e.target.value;
  if (val && e.key === "Enter") {
    const updatedTodo = createParagraphTag(val);
    e.target.parentNode.replaceChild(
      updatedTodo,
      e.target.parentNode.firstChild
    );
  }
});
