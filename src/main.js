import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngular,
  faVuejs,
  faNode,
  faJava,
  faSquareJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";

import { faLeaf, faDatabase } from "@fortawesome/free-solid-svg-icons";

library.add(
  faAngular,
  faVuejs,
  faNode,
  faJava,
  faSquareJs,
  faHtml5,
  faCss3Alt,
  faLeaf,
  faDatabase
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
