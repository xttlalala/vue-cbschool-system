import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/homepage",
    component: () => import("@/views/HomePage.vue")
  },
  {
    path: "/schoolactivity",
    component: () => import("@/views/SchoolActivity.vue")
  },
  {
    path: "/sponsor",
    component: () => import("@/views/Sponsor.vue")
  },
  {
    path: "/stage",
    component: () => import("@/views/Stage.vue")
  },
  {
    path: "/study",
    component: () => import("@/views/Study.vue")
  },
  {
    path: "/our",
    component: () => import("@/views/Our.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
