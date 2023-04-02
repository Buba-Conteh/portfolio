import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */


import {
  faDatabase,
  faChevronCircleLeft,
  faChevronRight,
  faChevronLeft,
  faMoon,
  faSun
} from "@fortawesome/free-solid-svg-icons";
import {
  faPhp,
  faSquareJs,
  faLaravel,
  faVuejs,
  faBootstrap,
  faHtml5,
  faCss3,
  faFacebook,
  faGithub,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPhp,
  faSquareJs,
  faLaravel,
  faVuejs,
  faBootstrap,
  faHtml5,
  faCss3,
  faDatabase,
  faChevronCircleLeft,
  faChevronRight,
  faChevronLeft,
  faFacebook,
  faGithub,
  faTwitch,
  faMoon,
  faSun
);



createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app")

