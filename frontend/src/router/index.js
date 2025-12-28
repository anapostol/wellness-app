import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "../components/layout/MainLayout.vue";
import HomeView from "../views/HomeView.vue";
import WorkoutsView from "../views/WorkoutsView.vue";
import NutritionView from "../views/NutritionView.vue";
import DashboardView from "../views/DashboardView.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", name: "home", component: HomeView }, // "/" (default)
      { path: "workouts", name: "workouts", component: WorkoutsView }, // "/workouts"
      { path: "nutrition", name: "nutrition", component: NutritionView }, // "/nutrition"
      { path: "dashboard", name: "dashboard", component: DashboardView }, // "/dashboard"
    ],
  },
  { path: "/login", name: "login", component: LoginView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
