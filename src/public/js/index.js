import "../css/index.css";
// import "../css/index.less";

console.log("index.js");

// <script src="./js/index.js" async defer>
// async after 'DOMContentLoaded'
// defer before 'DOMContentLoaded'
// window.addEventListener('DOMContentLoaded', () => {
//     console.log('ready');
// });

window.addEventListener("load", (event) => {
  console.log("load");
});
