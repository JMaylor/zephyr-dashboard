import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { MotionPlugin } from "@vueuse/motion";
import "./assets/index.css";

createApp(App).use(router).use(store).use(MotionPlugin).mount("#app");
