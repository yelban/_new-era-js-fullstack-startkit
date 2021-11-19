export function renderTodos(todos) {
  const arrRenderItem = todos.map((todo) => {
    const classStatus = todo.done ? "done" : "";
    return `
        <li data-id="${todo.id}" class="${classStatus}">
          <span class="custom-checkbox"></span>
          <label>${todo.title}</label>
          <span class="delete"></span>
        </li>
      `;
  });
  document.querySelector(".todo-list").innerHTML = arrRenderItem.join("");
}

export function clearNewTodoInput() {
  document.querySelector(".new-todo").value = "";
}

export function getTodoId(el) {
  return parseInt(el.dataset.id || el.parentNode.dataset.id || el.parentNode.parentNode.dataset.id, 10);
}
