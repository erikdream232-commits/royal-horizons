<template>
  <v-card class="mx-auto h-100 d-flex flex-column" elevation="2" rounded="lg">
    <v-img
      :src="destino.image"
      :alt="destino.imageAlt"
      height="200"
      cover
    />
    
    <v-card-item>
      <v-card-title class="font-weight-bold text-h6">
        {{ destino.name }}
      </v-card-title>

      <v-card-subtitle>
        <v-icon icon="mdi-map-marker" size="small" color="primary" class="me-1" />
        {{ destino.country }} • {{ destino.region }}
      </v-card-subtitle>
    </v-card-item>

    <v-card-text class="flex-grow-1">
      <p class="text-body-2 text-medium-emphasis mb-2">
        {{ destino.description }}
      </p>
      <v-chip size="x-small" color="secondary" variant="tonal">
        {{ destino.duration }}
      </v-chip>
    </v-card-text>

    <v-divider />

    <v-card-actions class="pa-4 d-flex justify-space-between align-center">
      <div>
        <span class="text-caption text-medium-emphasis d-block">Desde</span>
        <span class="text-h6 font-weight-bold text-primary">
          ${{ destino.price.toLocaleString() }} COP
        </span>
      </div>
      
      <v-btn
        color="primary"
        variant="flat"
        class="text-white"
        :to="`/reservar?destino=${destino.id}`"
      >
        Reservar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { Destination } from '~/stores/travel'

defineProps<{
  destino: Destination
}>()
</script>