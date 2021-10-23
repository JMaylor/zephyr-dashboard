import { createRouter, createWebHistory } from "vue-router";
import DashboardLayout from "./layouts/DashboardLayout.vue";
import About from "./views/About.vue";
import Auth from "./views/Auth.vue";
import Calendar from "./views/Calendar.vue";
import Form from "./views/Form.vue";
import Home from "./views/Home.vue";
import Profile from "./views/Profile.vue";
import Table from "./views/Table.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: Auth
    },
    {
      path: "/dashboard",
      component: DashboardLayout,
      children: [
        {
          path: "/dashboard",
          component: Home
        },
        {
          path: "/dashboard/calendar",
          component: Calendar
        },
        {
          path: "/dashboard/form",
          component: Form
        },
        {
          path: "/dashboard/table",
          component: Table
        },
        {
          path: "/dashboard/about",
          component: About
        },
        {
          path: "/dashboard/profile",
          component: Profile
        },
      ],
    },
  ],
  history: createWebHistory(),
});

export default router;
