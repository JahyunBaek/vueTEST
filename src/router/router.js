import { createWebHistory, createRouter } from "vue-router";
import ErrorPage from "@/components/ErrorPage";
import Home from "@/components/Home";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // path별 component를 추가한다.
    { path: "/", name: "home", component: Home },
    {
      path: "/:pathMatch(.*)",
      name: "not-found",
      component: ErrorPage,
    },
  ],
});

export default router;
