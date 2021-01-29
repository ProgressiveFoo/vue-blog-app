import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AppPosts from "../views/AppPosts.vue";
import Post from "../views/Post.vue";
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
  {
    path: "/post/:id",
    name: "Post",
    component: Post,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
