import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: () => import("@/views/Auth.vue"),
    },
    {
      path: "/dashboard",
      component: () => import("@/layouts/DashboardLayout.vue"),
      children: [
        {
          path: "/dashboard",
          component: () => import("@/views/Home.vue"),
        },
        {
          path: "/dashboard/calendar",
          component: () => import("@/views/Calendar.vue"),
        },
        {
          path: "/dashboard/about",
          component: () => import("@/views/About.vue"),
        },
        {
          path: "/dashboard/profile",
          component: () => import("@/views/Profile.vue"),
        },
      ],
    },
  ],
  history: createWebHistory(),
});

export default router;
