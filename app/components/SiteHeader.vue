<template>
  <v-app-bar flat border color="surface">
    <v-container class="d-flex align-center py-0">
      <!-- Logo e Identidad Visual -->
      <v-app-bar-title>
        <NuxtLink to="/" class="d-flex align-center text-decoration-none">
          <v-icon icon="mdi-compass-rose" color="primary" size="32" class="me-2" />
          <span class="brand-logo-text">Royal Horizons</span>
        </NuxtLink>
      </v-app-bar-title>

      <v-spacer />

      <!-- Botones de Navegación -->
      <v-btn variant="text" to="/">Explorar</v-btn>
      <v-btn variant="text" to="/precios">Precios</v-btn>
      <v-btn variant="text" to="/mis-reservas">Mis Reservas</v-btn>
      <v-btn
        color="primary"
        variant="flat"
        class="ms-2 btn-reservar-header"
        to="/reservar"
      >
        Reservar
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.brand-logo-text {
  font-family: 'Great Vibes', cursive;
  font-size: 2.2rem;
  font-weight: 400;
  color: #1e4638;
  line-height: 1.1;
  letter-spacing: 0.5px;
}

.btn-reservar-header :deep(.v-btn__content) {
  color: #ffffff !important;
}
</style>