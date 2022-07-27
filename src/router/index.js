import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import PostsPage from "@/pages/PostsPage";
import PostPage from '@/pages/PostPage'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/posts",
    name: "posts",
    component: PostsPage,
  },
  {
    path: "/posts/:id",
    name: "post",
    component: PostPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
