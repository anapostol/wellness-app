<template>
  <v-app-bar color="surface" elevation="0" height="72">
    <v-btn icon variant="text" class="me-1" @click="toggleDrawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <div class="d-flex align-center ga-3">
      <v-avatar size="38" color="primary" variant="tonal">
        <v-icon>mdi-dumbbell</v-icon>
      </v-avatar>

      <div class="title-wrap">
        <div class="text-subtitle-1 font-weight-semibold">Fitness & Wellness</div>
        <div class="text-caption text-medium-emphasis">Track workouts & nutrition</div>
      </div>
    </div>

    <v-spacer />

    <v-btn icon variant="text">
      <v-icon>mdi-bell-outline</v-icon>
    </v-btn>

    <v-menu location="bottom end">
      <template #activator="{ props }">
        <v-btn v-bind="props" variant="text" class="ms-1">
          <v-avatar size="36" color="primary" variant="tonal">
            <v-icon>mdi-account-circle-outline</v-icon>
          </v-avatar>
        </v-btn>
      </template>

      <v-card rounded="xl" elevation="0" border min-width="220">
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-account-outline" title="Profile" />
          <v-list-item prepend-icon="mdi-cog-outline" title="Settings" />
          <v-divider class="my-1" />
          <v-list-item prepend-icon="mdi-logout" title="Logout" />
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
const emit = defineEmits(['toggle-drawer'])
const toggleDrawer = () => emit('toggle-drawer')
</script>

<style scoped>
.title-wrap { line-height: 1.1; }
</style>
