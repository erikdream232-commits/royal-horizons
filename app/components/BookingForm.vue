<script setup lang="ts">
import type { Destination } from '~/stores/travel'

const props = defineProps<{
  destinations: Destination[]
  initialDestinationId: number | null
}>()

const form = ref<{ validate: () => Promise<{ valid: boolean }> } | null>(null)
const submitting = ref(false)
const confirmation = ref('')
const errorMessage = ref('')
const booking = reactive({
  travelerName: '',
  email: '',
  destinationId: props.initialDestinationId,
  departureDate: '',
  travelers: 1,
})
const requiredRule = (value: string | number | null) => Boolean(value) || 'Este campo es obligatorio.'
const emailRule = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Escribe un correo válido.'

async function submitBooking() {
  const result = await form.value?.validate()
  if (!result?.valid) return

  submitting.value = true
  confirmation.value = ''
  errorMessage.value = ''

  try {
    const response = await $fetch<{ reference: string, message: string }>('/api/reservas', {
      method: 'POST',
      body: booking,
    })
    confirmation.value = `${response.message} Referencia: ${response.reference}`
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'No se pudo enviar la solicitud.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <v-form ref="form" class="booking-form" @submit.prevent="submitBooking">
    <v-row>
      <v-col cols="12">
        <v-select
          v-model="booking.destinationId"
          :items="destinations"
          item-title="name"
          item-value="id"
          label="Destino"
          :rules="[requiredRule]"
          variant="outlined"
          required
        />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="booking.travelerName"
          label="Nombre completo"
          :rules="[requiredRule]"
          variant="outlined"
          autocomplete="name"
          required
        />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="booking.email"
          label="Correo electrónico"
          type="email"
          :rules="[requiredRule, emailRule]"
          variant="outlined"
          autocomplete="email"
          required
        />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="booking.departureDate"
          label="Fecha de salida"
          type="date"
          :rules="[requiredRule]"
          variant="outlined"
          required
        />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model.number="booking.travelers"
          label="Número de viajeros"
          type="number"
          min="1"
          max="12"
          :rules="[requiredRule]"
          variant="outlined"
          required
        />
      </v-col>
      <v-col cols="12">
        <v-alert v-if="confirmation" type="success" class="mb-4">{{ confirmation }}</v-alert>
        <v-alert v-if="errorMessage" type="error" class="mb-4">{{ errorMessage }}</v-alert>
        <v-btn class="btn-primary" color="primary" type="submit" :loading="submitting" size="large" variant="flat">
          Enviar solicitud
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
