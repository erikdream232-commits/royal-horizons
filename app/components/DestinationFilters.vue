<script setup lang="ts">
const travel = useTravelStore()

const priceOptions = [
  { title: 'Cualquier precio', value: null },
  { title: 'Hasta $1,500 USD', value: 1500 },
  { title: 'Hasta $2,000 USD', value: 2000 },
  { title: 'Hasta $2,500 USD', value: 2500 },
]
</script>

<template>
  <div class="search-panel">
    <p class="filter-caption">Encuentra tu próximo horizonte</p>
    <v-row align="center">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="travel.search"
          label="Destino o país"
          placeholder="Ej. Kioto, Grecia..."
          variant="outlined"
          density="comfortable"
          hide-details
          clearable
        />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-select
          v-model="travel.region"
          :items="travel.regions"
          label="Región"
          variant="outlined"
          density="comfortable"
          hide-details
        />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-select
          v-model="travel.maxPrice"
          :items="priceOptions"
          label="Precio máximo"
          variant="outlined"
          density="comfortable"
          hide-details
        />
      </v-col>
    </v-row>
  </div>
</template>
