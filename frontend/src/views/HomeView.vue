<template>
  <div>
    <h1>Home</h1>
    <p>Status backend: {{ status }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import api from "../services/api";

const status = ref("checking...");

onMounted(async () => {
  try {
    const res = await api.get("/api/health");
    status.value = res.data?.status || "ok";
  } catch (e) {
    status.value = "offline";
  }
});
</script>
