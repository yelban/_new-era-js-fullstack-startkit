import todos from "./todo.json";

let data = todos;

export function getAllTodos() {
  return data;
}

export function addTodo(todo) {
  data.push(todo);
}

export function deleteTodo(id) {
  data = data.filter((item) => item.id !== id);
}

export function updateTodo(id, done) {
  const itemIndex = data.findIndex((value) => value.id === id);
  data[itemIndex].done = done;
}
