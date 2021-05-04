import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMusic,
  faPlay,
  faPause,
  faStepForward,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faMusic, faPlay, faPause, faStepBackward, faStepForward);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
