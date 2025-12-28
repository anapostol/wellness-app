<template>
  <div>
    <h1 class="text-h4 mb-4">Dashboard</h1>
    
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Workout Progress</v-card-title>
          <v-card-text>
            <v-skeleton-loader type="article"></v-skeleton-loader>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Nutrition Stats</v-card-title>
          <v-card-text>
            <v-skeleton-loader type="article"></v-skeleton-loader>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>