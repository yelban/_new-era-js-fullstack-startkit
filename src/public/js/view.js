export function renderTodos(todos) {
  const arrRenderItem = todos.map((todo) => {
    const classStatus = todo.done ? "done" : "";
    const completionClass = todo.done ? "checked" : "";

    return `
        <li data-id="${todo.id}" class="${classStatus}">
          <span class="custom-checkbox">
            <i class="fas fa-check"></i>
            <input class="real-checkbox" type="checkbox" ${completionClass} />
          </span>
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

export function showAlert(text) {
  console.log("showAlert", showAlert);

  const alertEl = document.createElement("div");
  alertEl.classList.add("alert", "alert-success");
  alertEl.setAttribute("role", "alert");
  alertEl.innerHTML = text;
  document.body.appendChild(alertEl);

  setTimeout(() => {
    alertEl.parentNode.removeChild(alertEl);
  }, 2500);
}
