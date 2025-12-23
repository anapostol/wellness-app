import { defineStore } from "pinia";

export const useNutritionStore = defineStore("nutrition", {
  state: () => ({
    mealPlans: [],
  }),
});
