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
  faJs,
  faHtml5,
  faCss3Alt,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  faLeaf,
  faDatabase,
  faFilePdf,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { MotionPlugin } from "@vueuse/motion";

library.add(
  faAngular,
  faVuejs,
  faNode,
  faJava,
  faJs,
  faHtml5,
  faCss3Alt,
  faLeaf,
  faDatabase,
  faGithub,
  faLinkedin,
  faFilePdf,
  faEnvelope
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(MotionPlugin);
app.mount("#app");
