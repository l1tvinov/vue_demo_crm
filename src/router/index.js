import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "empty"
    },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    meta: {
      layout: "empty"
    },
    component: () => import("../views/Register.vue")
  },
  {
    path: "/",
    name: "Home",
    meta: {
      layout: "main"
    },
    component: () => import("../views/Home.vue")
  },
  {
    path: "/categories",
    name: "categories",
    meta: {
      layout: "main"
    },
    component: () => import("../views/Categories.vue")
  },
  {
    path: "/detail/:id",
    name: "detail",
    meta: {
      layout: "main"
    },
    component: () => import("../views/Detail.vue")
  },
  {
    path: "/History",
    name: "History",
    meta: {
      layout: "main"
    },
    component: () => import("../views/History.vue")
  },
  {
    path: "/Planning",
    name: "Planning",
    meta: {
      layout: "main"
    },
    component: () => import("../views/Planning.vue")
  },
  {
    path: "/Record",
    name: "Record",
    meta: {
      layout: "main"
    },
    component: () => import("../views/Record.vue")
  },
  {
    path: "/Profile",
    name: "Profile",
    meta: {
      layout: "main"
    },
    component: () => import("../views/Profile.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
