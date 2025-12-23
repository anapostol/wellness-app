import { defineStore } from "pinia";

export const useWorkoutsStore = defineStore("workouts", {
  state: () => ({
    items: [],
  }),
});
