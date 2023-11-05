class Todo {
  constructor(todoStr) {
    this.todo = todoStr;
  }

  appendTodoEl(todo = this.todo, todos = todosEl) {
    todos.appendChild(this.createTodoLiEl(todo));
    return todos;
  }
  createTodoLiEl(todoStr) {
    const listEl = document.createElement("li");
    listEl.setAttribute("data-todo", todoStr);
    listEl.appendChild(this.createSpanEl(todoStr));
    listEl.appendChild(this.createEditBtn());
    listEl.appendChild(this.createDeleteBtn());
    return listEl;
  }
  createSpanEl(todoStr) {
    const spanEl = document.createElement("span");
    spanEl.value = "todo";
    spanEl.innerText = todoStr;
    return spanEl;
  }
  createEditBtn() {
    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.value = "edit";
    editBtn.innerText = "Edit";
    return editBtn;
  }
  createDeleteBtn() {
    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.value = "delete";
    delBtn.innerText = "Delete";
    return delBtn;
  }
  deleteTodoEl(event = e, todosEl = todosEl) {
    todosEl.removeChild(event.target.parentNode);
  }
  swapTodoSpanElWithInputEl(event = e) {
    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.value = event.target.parentNode.firstChild.innerText;
    event.target.parentNode.replaceChild(inputEl, event.target.parentNode.firstChild);
  }
  swapTodoInputElWithSpanEl(event = e) {
    const updatedTodo = this.createSpanTag(val);
    event.target.parentNode.replaceChild(
      updatedTodo,
      event.target.parentNode.firstChild
    );
  }
  toggleDoneClass(event = e) {
    event.target.classList.toggle("done");
  }
}

const todosArr = [new Todo("first todo"), new Todo("second todo"), new Todo("third todo")];
const todosEl = document.getElementById("todos");
todosArr.forEach(todo => {
  todo.appendTodoEl();
})

const todosForm = document.getElementById("todos-form");

todosForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  if (e.target[0].value !== "") {
    todosArr.push((new Todo(e.target[0].value).appendTodoEl()));
  }
  e.target[0].value = "";
});

todosEl.addEventListener("click", (e) => {
  console.log(e.target.value);

  if (e.target.value === "delete") {
    todosArr[1].deleteTodoEl(e, todosEl);
  }
  if (e.target.value === "edit") {
    Todo.swapTodoSpanElWithInputEl(e);
  }
  if (e.target.value === "todo") {
    Todo.toggleDoneClass(e);
  }
});

todosEl.addEventListener("keyup", (e) => {
  console.log(e);
  const val = e.target.value;
  if (val && e.key === "Enter") {
    Todo.swapTodoInputElWithSpanEl(e);
  }
});


