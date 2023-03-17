import { createRouter, createWebHistory } from "vue-router";
import { HomePage, ErrorPage, SingleRepoPage } from "@/pages";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },

  {
    path: "/repository/:name",
    name: "SingleRepoPage",
    component: SingleRepoPage,
  },

  {
    path: "/:catchAll(.*)",
    name: "ErrorPage",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
