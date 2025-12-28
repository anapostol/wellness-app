<template>
    <v-navigation-drawer
        v-model="drawer"
        color="surface"
        elevation="0"
        :rail="!drawer"
        :expand-on-hover="false"
        :width="280"
    >
    <div v-if="drawer" class="px-4 pt-4 pb-2">
      <div class="d-flex align-center ga-3">
        <v-avatar color="primary" variant="tonal" size="38">
          <v-icon>mdi-dumbbell</v-icon>
        </v-avatar>
        <div>
          <div class="text-subtitle-1 font-weight-semibold">Fitness & Wellness</div>
          <div class="text-caption text-medium-emphasis">Menu</div>
        </div>
      </div>
    </div>

    <v-divider v-if="drawer" class="my-3" />

    <v-list nav density="comfortable" class="px-2">
    <v-list-item :to="{ name: 'home' }" title="Home" prepend-icon="mdi-home-outline" class="pill" exact />

      <v-list-item :to="{ name: 'workouts' }" title="Workouts" prepend-icon="mdi-dumbbell" class="pill" />
      <v-list-item :to="{ name: 'nutrition' }" title="Nutrition" prepend-icon="mdi-food-apple-outline" class="pill" />
      <v-list-item :to="{ name: 'dashboard' }" title="Dashboard" prepend-icon="mdi-chart-line" class="pill" />

      <v-divider class="my-3" />

      <v-list-item title="Profile" prepend-icon="mdi-account-outline" class="pill" />
      <v-list-item title="Settings" prepend-icon="mdi-cog-outline" class="pill" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
const drawer = defineModel({ type: Boolean })
</script>

<style scoped>
.pill { border-radius: 14px; }
.pill :deep(.v-list-item__overlay) { border-radius: 14px; }
</style>
