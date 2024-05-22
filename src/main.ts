import "./index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import clickOutside from "./directives/clickOutside";

const app = createApp(App);

app.directive("click-outside", clickOutside);

app.use(createPinia());

app.mount("#app");
