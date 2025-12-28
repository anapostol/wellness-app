<template>
  <div>
    <h1 class="text-h4 mb-4">Meal Plans</h1>
    
    <v-row>
      <v-col v-for="n in 6" :key="n" cols="12" md="4">
        <v-skeleton-loader type="card"></v-skeleton-loader>
      </v-col>
    </v-row>
  </div>
</template>