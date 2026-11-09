<template>
  <v-app>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>
<style>
/* Forzar texto blanco en todos los botones primarios de la app */
.v-btn.bg-primary .v-btn__content,
.v-btn[color="primary"] .v-btn__content {
  color: #ffffff !important;
  font-weight: bold;
}
</style>