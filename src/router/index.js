import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AppPosts from "../views/AppPosts.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts",
    name: "Posts",
    component: AppPosts,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
