import { onLoadEventHandler, newtodoEventHandler } from "./event-handlers";

import "../css/index.scss";

window.addEventListener("load", onLoadEventHandler);
const input = document.querySelector(".new-todo");
input.addEventListener("change", newtodoEventHandler);
