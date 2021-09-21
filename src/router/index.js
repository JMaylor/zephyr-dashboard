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
      ],
    },
  ],
  history: createWebHistory(),
});

export default router;
