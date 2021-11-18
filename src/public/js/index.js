// import "../css/index.css";
// import "the-new-css-reset";
// import "../css/index.less";
import "../css/index.scss";
import todoData from "./todo.json";

console.log("index.js");
console.log("todoData", todoData);

// <script src="./js/index.js" async defer>
// async after 'DOMContentLoaded'
// defer before 'DOMContentLoaded'
// window.addEventListener('DOMContentLoaded', () => {
//     console.log('ready');
// });

function renderTodos(todos) {
  const arrRenderItem = todos.map((todo) => {
    const classStatus = todo.done ? "done" : "";
    return `
      <li data-id="${todo.id}" class="${classStatus}">
        <span class="custom-checkbox"></span>
        <label>${todo.title}</label>
      </li>
    `;
  });
  document.querySelector(".todo-list").innerHTML = arrRenderItem.join("");
}

window.addEventListener("load", (event) => {
  console.log("load", event);

  renderTodos(todoData);
});
