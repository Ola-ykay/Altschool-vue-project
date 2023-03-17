import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'
import HomePage from "./pages/HomePage.vue";
import RepoList from "./pages/RepoList.vue";
import pageSearch from "./pages/pageSearch.vue";

// import router from './router'

const routes = [
  { path: "/", component: HomePage, name: "HomePage" },
  { path: "/repo", component: RepoList, name: "RepoList" },
  { path: "/search", component: pageSearch, name: "pageSearch" },
  {
    name: "NotFound",
    path: "/:catchAll(.*)",
    component: () => import("./pages/NotFound.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

const app = createApp(App);

app.use(router);

app.mount("#app");
