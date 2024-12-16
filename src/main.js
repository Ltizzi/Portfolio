import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGithubSquare,
  faLinkedin,
  faSquareXTwitter,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin, faSquareXTwitter, faGithub, faSquareEnvelope);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
