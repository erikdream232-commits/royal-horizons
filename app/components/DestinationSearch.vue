<template>
  <v-card class="pa-4 mb-6" elevation="1" rounded="lg">
    <v-row align="center">
      <!-- Barra de búsqueda por texto -->
      <v-col cols="12" md="8">
        <v-text-field
          v-model="store.search"
          label="Buscar por destino o país..."
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          clearable
        />
      </v-col>

      <!-- Filtro selector de región -->
      <v-col cols="12" md="4">
        <v-select
          v-model="store.region"
          :items="store.regions"
          label="Filtrar por Región"
          variant="outlined"
          hide-details
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { useTravelStore } from '~/stores/travel'

const store = useTravelStore()
</script>