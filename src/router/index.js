import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/question",
      name: "qustion",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/QuestionView.vue"),
    },
    {
      path: "/answer",
      name: "answer",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AnswerView.vue"),
      beforeEnter: (_to, from) => {
        if (from.name === undefined) return { name: "home" };
        else return true;
      },
    },
    {
      path: "/score",
      name: "score",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ScoreView.vue"),
    },
    {
      path: "/credit",
      name: "credit",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CreditView.vue"),
    },
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve({
            ...savedPosition,
            behavior: "smooth",
          });
        }, 10);
      });
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

export default router;
