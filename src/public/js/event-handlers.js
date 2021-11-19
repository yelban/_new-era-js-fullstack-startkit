import { renderTodos, clearNewTodoInput, getTodoId } from "./view";
import { getAllTodos, addTodo, deleteTodo } from "./data";

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
}
