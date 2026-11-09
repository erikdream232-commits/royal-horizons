<template>
  <v-container class="py-8">
    <h1 class="text-h3 font-weight-bold mb-2">Descubre tu próximo destino</h1>
    <p class="text-body-1 text-medium-emphasis mb-6">
      Escapadas cuidadosamente diseñadas para explorar lugares extraordinarios.
    </p>

    <!-- Buscador y Filtros -->
    <DestinationSearch />

    <!-- Indicador de Carga -->
    <v-row v-if="store.loading">
      <v-col cols="12" class="text-center py-12">
        <v-progress-circular indeterminate color="primary" size="64" />
      </v-col>
    </v-row>

    <!-- Cuadrícula de Destinos -->
    <v-row v-else-if="store.filteredDestinations && store.filteredDestinations.length">
      <v-col
        v-for="destino in store.filteredDestinations"
        :key="destino.id"
        cols="12"
        sm="6"
        md="4"
      >
        <DestinationCard :destino="destino" />
      </v-col>
    </v-row>

    <!-- Estado vacío sin resultados -->
    <v-row v-else>
      <v-col cols="12" class="text-center py-12">
        <v-icon icon="mdi-compass-off" size="64" color="grey-lighten-1" class="mb-4" />
        <h3 class="text-h6 text-medium-emphasis">No se encontraron destinos</h3>
        <p class="text-body-2 text-medium-emphasis">Intenta modificar la búsqueda o limpiar los filtros.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useTravelStore } from '~/stores/travel'

const store = useTravelStore()

onMounted(() => {
  if (typeof store.cargarDestinos === 'function') {
    store.cargarDestinos()
  }
})
</script>