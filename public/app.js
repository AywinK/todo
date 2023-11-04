const todos = document.getElementById("todos");
console.log(todos);

const todosForm = document.getElementById("todos-form");
todosForm.addEventListener("submit", appendTodo);

function appendTodo(e) {
  e.preventDefault();
  console.log(e.target[0].value);
  if (e.target[0].value !== "") {
    addTodo(e.target[0].value);
  }
  e.target[0].value = "";
}

function addTodo(todoStr) {
  const todo = document.createElement("li");
  todo.textContent = todoStr;
  todo.appendChild(addEditBtn(todoStr));
  todos.appendChild(todo);
}

function addEditBtn(todoStr) {
  const editBtn = document.createElement("button");
  editBtn.value = todoStr;
  editBtn.setAttribute("type", "button");
  editBtn.textContent = "Edit";
  return editBtn;
}

todos.addEventListener("click", (e) => {
  console.log(e.target.type);
  if (e.target.type === "button") {
    console.log(e.target.value);
    const updatedTodoVal = prompt(`Enter updated todo for "${e.target.value}"`);
    const editBtns = document.querySelectorAll('button[type="button"]');
    for (let i = 0; i < editBtns.length; i++) {
      if (editBtns[i].value === e.target.value) {
        editBtns[i].value = updatedTodoVal;
      }
    }
    const listElsArr = document.querySelectorAll("li");
    console.log(listElsArr[0]);
    for (let i = 0; i < listElsArr.length; i++) {
      console.log(listElsArr[i]);
      if (listElsArr[i].value === e.target.value) {
        listElsArr[i].value = updatedTodoVal;
        listElsArr[i].innerText = updatedTodoVal;
      }
    }
    console.log(editBtns);
  }
});

for (let i = 0; i <= 10; i++) {
  addTodo(i);
}
