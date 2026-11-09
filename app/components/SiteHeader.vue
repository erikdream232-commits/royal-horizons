<script setup lang="ts">
const links = [
  { label: 'Explorar', to: '/' },
  { label: 'Precios', to: '/precios' },
  { label: 'Reservar', to: '/reservar' },
]
</script>

<template>
  <header class="site-app-bar">
    <v-container class="header-inner">
      <NuxtLink class="brand-lockup" to="/" aria-label="Royal Horizons, inicio">
        <span class="brand-monogram">RH</span>
        <span>
          <span class="brand-name">Royal Horizons</span>
          <span class="brand-caption">Travel collection</span>
        </span>
      </NuxtLink>

      <nav class="desktop-nav" aria-label="Navegación principal">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="nav-link">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <v-btn class="header-action btn-primary" color="primary" to="/reservar" rounded="0" variant="flat">
        Planear un viaje
      </v-btn>

      <v-menu>
        <template #activator="{ props }">
          <v-btn v-bind="props" class="mobile-menu" variant="text" aria-label="Abrir navegación">
            Menú
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.to" :to="link.to" :title="link.label" />
        </v-list>
      </v-menu>
    </v-container>
  </header>
</template>
