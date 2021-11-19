import { library, dom } from "@fortawesome/fontawesome-svg-core";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { onLoadEventHandler, newtodoEventHandler } from "./event-handlers";

import "../css/index.scss";

dom.watch();

library.add(faCheck);

window.addEventListener("load", onLoadEventHandler);
const input = document.querySelector(".new-todo");
input.addEventListener("change", newtodoEventHandler);
