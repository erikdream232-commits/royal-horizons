<script setup lang="ts">
import type { Destination } from '~/stores/travel'

defineProps<{
  destinations: Destination[]
  initialDestinationId: number | null
}>()
</script>

<template>
  <section class="booking-section">
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <BookingForm
            :destinations="destinations"
            :initial-destination-id="initialDestinationId"
          />
        </v-col>
        <v-col cols="12" md="4">
          <BookingNote />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
