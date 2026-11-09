<script setup lang="ts">
const route = useRoute()
const travel = useTravelStore()
await travel.loadDestinations()
const initialDestinationId = Number(route.query.destino) || null
</script>

<template>
  <div>
    <PageIntro
      kicker="Tu próxima historia empieza aquí"
      title="Solicita tu reserva."
      description="Comparte algunos datos y nuestro equipo te ayudará a confirmar el viaje."
    />
    <BookingSection
      :destinations="travel.destinations"
      :initial-destination-id="initialDestinationId"
    />
  </div>
</template>
