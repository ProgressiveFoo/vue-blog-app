import Vue from "vue";
import VueRouter from "vue-router";
import AppPosts from "../views/AppPosts.vue";
import Post from "../views/Post.vue";
import AddNewPost from "../views/AddNewPost.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/posts",
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
  {
    path: "/add",
    name: "AddNewPost",
    component: AddNewPost,
  },
  {
    path: "/posts/:id/edit",
    name: "EditPost",
    component: AddNewPost,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
