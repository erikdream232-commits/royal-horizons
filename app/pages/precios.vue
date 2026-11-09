<script setup lang="ts">
const travel = useTravelStore()
const { currency } = useCurrency()
await travel.loadDestinations()
</script>

<template>
  <div>
    <PageIntro
      kicker="Precios claros"
      title="Elige el viaje que va contigo."
      :description="`Tarifas iniciales por persona en ${currency}. El precio final puede variar según fechas y disponibilidad.`"
    />
    <v-container class="pb-0">
      <CurrencyToggle />
    </v-container>
    <PricingTable :destinations="travel.destinations" />
  </div>
</template>
