<script setup lang="ts">
const travel = useTravelStore()
await travel.loadDestinations()
</script>

<template>
  <div>
    <HomeHero />
    <DestinationSearch />
    <DestinationCatalog />
    <TravelAdvisorCta />
  </div>
</template>
