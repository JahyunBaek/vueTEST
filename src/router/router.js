import { createWebHistory, createRouter } from "vue-router";
import ErrorPage from "@/components/ErrorPage";
import Home from "@/components/Home";
import Event from "@/components/EventTest";
import Form from "@/components/FormBinding";
import Watch from "@/components/WatchPage";
import Template from "@/components/TempletePage";
import ComponentExample from "@/components/ComponentFoundation";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // path별 component를 추가한다.
    { path: "/", name: "home", component: Home },
    { path: "/event", name: "event", component: Event },
    { path: "/form", name: "form", component: Form },
    { path: "/watch", name: "watch", component: Watch },
    { path: "/template", name: "template", component: Template },
    { path: "/compo", name: "compo", component: ComponentExample },
    {
      path: "/:pathMatch(.*)",
      name: "not-found",
      component: ErrorPage,
    },
  ],
});

export default router;
