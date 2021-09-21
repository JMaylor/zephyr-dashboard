import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { MotionPlugin } from "@vueuse/motion";
import VCalendar from "v-calendar";
import VWave from 'v-wave'
import "./assets/index.css";
import "@purge-icons/generated";

createApp(App)
  .use(router)
  .use(store)
  .use(MotionPlugin)
  .use(VCalendar, {})
  .use(VWave)
  .mount("#app");
