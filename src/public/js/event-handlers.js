import { renderTodos, clearNewTodoInput } from "./view";
import { getAllTodos, addTodo } from "./data";

function trim(value) {
  return value.trim();
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.substring(1);
}

export function onLoadEventHandler() {
  renderTodos(getAllTodos());
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
  clearNewTodoInput();
}
