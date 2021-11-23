import {
  renderTodos, clearNewTodoInput, getTodoId, showAlert,
} from "./view";
import {
  getAllTodos, addTodo, deleteTodo, updateTodo,
} from "./data";

function trim(value) {
  return value.trim();
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.substring(1);
}

function removeTodoEventHandler(event) {
  console.log("event", event);
  // console.log("getTodoId(event.target)", getTodoId(event.target));

  const id = getTodoId(event.target);
  // const id = event.target.parentNode.getAttribute("data-id");
  if (!id) {
    return;
  }

  deleteTodo(id);
  renderTodos(getAllTodos());
  attachTodoEvent();
}

function attachTodoEvent() {
  const arrTodoClass = document.getElementsByClassName("delete");
  console.log("arrTodoClass", arrTodoClass);
  Array.from(arrTodoClass).forEach((el) => {
    el.removeEventListener("click", removeTodoEventHandler);
    el.addEventListener("click", removeTodoEventHandler);
  });

  const arrCheckBoxClass = document.getElementsByClassName("real-checkbox");
  console.log("arrCheckBoxClass", arrCheckBoxClass);
  Array.from(arrCheckBoxClass).forEach((el) => {
    el.removeEventListener("click", toggleTodoEventListener);
    el.addEventListener("click", toggleTodoEventListener);
  });
}

export function onLoadEventHandler() {
  renderTodos(getAllTodos());
  attachTodoEvent();
}

export function newtodoEventHandler(event) {
  console.log(event);
  let title = event.target.value;
  // title = capitalize(trim(title));
  title = title |> trim |> capitalize;

  addTodo({
    id: Date.now(),
    title,
    done: false,
  });

  renderTodos(getAllTodos());
  attachTodoEvent();
  clearNewTodoInput();
  showAlert("Todo has been created successfully!");
}

function toggleTodoEventListener(event) {
  const id = getTodoId(event.target);
  const isDone = event.target.checked;
  updateTodo(id, isDone);
  renderTodos(getAllTodos());
  attachTodoEvent();
}
