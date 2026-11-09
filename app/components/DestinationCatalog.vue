<script setup lang="ts">
const travel = useTravelStore()
const { currency } = useCurrency()
</script>

<template>
  <section id="destinos" class="content-section">
    <v-container>
      <div class="d-flex flex-wrap justify-space-between align-end ga-4">
        <div>
          <p class="section-kicker">Nuestra selección</p>
          <h2 class="section-heading">Destinos para recordar</h2>
          <p class="section-copy">Precios por persona en {{ currency }}. Cada viaje incluye una selección de experiencias locales.</p>
        </div>
        <div class="d-flex flex-column align-start ga-2">
          <span class="section-copy">{{ travel.filteredDestinations.length }} destinos</span>
          <CurrencyToggle />
        </div>
      </div>

      <div class="destination-grid">
        <DestinationCard
          v-for="destination in travel.filteredDestinations"
          :key="destination.id"
          :destination="destination"
        />
        <div v-if="travel.filteredDestinations.length === 0" class="empty-state">
          No encontramos destinos con esos filtros. Prueba otra búsqueda.
        </div>
      </div>
    </v-container>
  </section>
</template>
