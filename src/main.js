import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { MotionPlugin } from "@vueuse/motion";
import VCalendar from 'v-calendar';
import "./assets/index.css";

createApp(App).use(router).use(store).use(MotionPlugin).use(VCalendar, {}).mount("#app");
