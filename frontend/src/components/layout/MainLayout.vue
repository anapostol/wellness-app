<template>
  <v-app>
    <AppBar @toggle-drawer="drawer = !drawer" />
    <NavigationDrawer v-model="drawer" />

    <v-main class="main-bg" @click="closeOnMobile">
      <v-container class="py-6">
        <router-view />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import AppBar from './AppBar.vue'
import NavigationDrawer from './NavigationDrawer.vue'
import Footer from './Footer.vue'

const drawer = ref(false)
const { mdAndDown } = useDisplay()

const closeOnMobile = () => {
  if (mdAndDown.value && drawer.value) drawer.value = false
}
</script>

<style>
.main-bg { background: rgb(var(--v-theme-background)); }
.v-container { max-width: 1200px; }
</style>
