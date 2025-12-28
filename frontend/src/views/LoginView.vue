<template>
  <v-container class="py-10" style="min-height: 80vh;">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card rounded="xl" elevation="0" border class="pa-6">
          <div class="text-center mb-6">
            <v-avatar size="56" color="primary" variant="tonal" class="mb-3">
              <v-icon size="28">mdi-lock-outline</v-icon>
            </v-avatar>
            <div class="text-h5 font-weight-semibold">Sign in</div>
            <div class="text-body-2 text-medium-emphasis">Welcome back! Please enter your details.</div>
          </div>

          <v-text-field
            label="Email"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            rounded="lg"
            class="mb-3"
          />

          <v-text-field
            label="Password"
            prepend-inner-icon="mdi-lock-outline"
            type="password"
            variant="outlined"
            rounded="lg"
            class="mb-2"
          />

          <div class="d-flex justify-space-between align-center mb-4">
            <v-checkbox density="compact" hide-details label="Remember me" />
            <a class="text-body-2" href="#">Forgot password?</a>
          </div>

          <v-btn color="primary" size="large" block rounded="lg" variant="flat">
            Login
          </v-btn>

          <div class="text-center text-body-2 mt-4 text-medium-emphasis">
            Don't have an account? <a href="#">Sign up</a>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
