<script setup lang="ts">
import type { Destination } from '~/stores/travel'

defineProps<{ destination: Destination }>()
const { formatPrice } = useCurrency()
</script>

<template>
  <v-card class="destination-card" variant="flat">
    <div class="position-relative">
      <v-img
        class="destination-image"
        :src="destination.image"
        :alt="destination.imageAlt"
        cover
      />
      <span class="destination-tag">{{ destination.highlight }}</span>
    </div>
    <div class="destination-body">
      <span class="destination-country">{{ destination.country }} · {{ destination.region }}</span>
      <h3 class="destination-title">{{ destination.name }}</h3>
      <p class="destination-description">{{ destination.description }}</p>
      <div class="destination-meta">
        <span class="destination-duration">{{ destination.duration }} · por persona</span>
        <span class="destination-price">
          {{ formatPrice(destination.price) }}
          <small>desde</small>
        </span>
      </div>
      <v-btn class="btn-primary mt-4" color="primary" :to="`/reservar?destino=${destination.id}`" variant="flat" block>
        Consultar viaje
      </v-btn>
    </div>
  </v-card>
</template>
