<template>
  <v-container class="py-8">
    <v-card rounded="xl" elevation="0" border class="pa-8 mb-8">
      <div class="d-flex align-center ga-4">
        <v-avatar size="56" color="primary" variant="tonal">
          <v-icon size="28">mdi-dumbbell</v-icon>
        </v-avatar>

        <div>
          <div class="text-h4 font-weight-semibold">Welcome to Fitness & Wellness!</div>
          <div class="text-body-1 text-medium-emphasis mt-1">
            Your complete platform for fitness and nutrition tracking
          </div>
        </div>
      </div>
    </v-card>

    <v-row dense>
      <v-col cols="12" md="4">
        <v-card rounded="xl" elevation="0" border class="pa-6 h-100">
          <div class="d-flex align-center ga-3 mb-3">
            <v-avatar color="primary" variant="tonal">
              <v-icon>mdi-run</v-icon>
            </v-avatar>
            <div class="text-h6 font-weight-semibold">Workout Programs</div>
          </div>

          <div class="text-body-2 text-medium-emphasis mb-6">
            Browse and enroll in workout programs
          </div>

          <v-btn color="primary" variant="flat" rounded="lg" :to="{ name: 'workouts' }">
            View programs
          </v-btn>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card rounded="xl" elevation="0" border class="pa-6 h-100">
          <div class="d-flex align-center ga-3 mb-3">
            <v-avatar color="secondary" variant="tonal">
              <v-icon>mdi-food-apple-outline</v-icon>
            </v-avatar>
            <div class="text-h6 font-weight-semibold">Meal Plans</div>
          </div>

          <div class="text-body-2 text-medium-emphasis mb-6">
            Discover meal plans tailored to your goals
          </div>

          <v-btn color="primary" variant="flat" rounded="lg" :to="{ name: 'nutrition' }">
            View plans
          </v-btn>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card rounded="xl" elevation="0" border class="pa-6 h-100">
          <div class="d-flex align-center ga-3 mb-3">
            <v-avatar color="info" variant="tonal">
              <v-icon>mdi-chart-line</v-icon>
            </v-avatar>
            <div class="text-h6 font-weight-semibold">Track Progress</div>
          </div>

          <div class="text-body-2 text-medium-emphasis mb-6">
            Monitor your fitness journey with analytics
          </div>

          <v-btn color="primary" variant="flat" rounded="lg" :to="{ name: 'dashboard' }">
            View dashboard
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";
import api from "../services/api";

const status = ref("checking...");

onMounted(async () => {
  try {
    const res = await api.get("/health");
    status.value = res.data?.status || "ok";
  } catch (e) {
    status.value = "offline";
  }
});
</script>
