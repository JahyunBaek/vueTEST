import { createWebHistory, createRouter } from "vue-router";
import ErrorPage from "@/components/ErrorPage";
import Home from "@/components/Home";
import Event from "@/components/EventTest";
import Form from "@/components/FormBinding";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // path별 component를 추가한다.
    { path: "/", name: "home", component: Home },
    { path: "/event", name: "event", component: Event },
    { path: "/form", name: "form", component: Form },
    {
      path: "/:pathMatch(.*)",
      name: "not-found",
      component: ErrorPage,
    },
  ],
});

export default router;
