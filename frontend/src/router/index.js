import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import WorkoutsView from "../views/WorkoutsView.vue";
import NutritionView from "../views/NutritionView.vue";
import DashboardView from "../views/DashboardView.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/workouts", name: "workouts", component: WorkoutsView },
  { path: "/nutrition", name: "nutrition", component: NutritionView },
  { path: "/dashboard", name: "dashboard", component: DashboardView },
  { path: "/login", name: "login", component: LoginView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
