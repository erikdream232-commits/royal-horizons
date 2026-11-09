<template>
  <v-container class="py-8" max-width="600">
    <h1 class="text-h3 font-weight-bold mb-2">Completar Reserva</h1>
    <p class="text-body-1 text-medium-emphasis mb-6">
      Ingresa tus datos para confirmar tu paquete de viaje.
    </p>

    <v-card class="pa-6" elevation="2" rounded="lg">
      <v-form @submit.prevent="enviarReserva">
        <v-text-field
          v-model="form.nombre"
          label="Nombre completo"
          variant="outlined"
          required
          class="mb-3"
        />

        <v-text-field
          v-model="form.email"
          label="Correo electrónico"
          type="email"
          variant="outlined"
          required
          class="mb-3"
        />

        <v-select
          v-model="form.destinoId"
          :items="store.destinations"
          item-title="name"
          item-value="id"
          label="Seleccionar destino"
          variant="outlined"
          required
          class="mb-4"
        />

        <v-alert
          v-if="mensajeExito"
          type="success"
          variant="tonal"
          class="mb-4"
          closable
        >
          {{ mensajeExito }}
        </v-alert>

        <v-btn
          type="submit"
          color="primary"
          size="large"
          block
          :loading="enviando"
        >
          Confirmar Reserva
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useTravelStore } from '~/stores/travel'

const route = useRoute()
const store = useTravelStore()

const enviando = ref(false)
const mensajeExito = ref('')

const form = reactive({
  nombre: '',
  email: '',
  destinoId: Number(route.query.destino) || null
})

onMounted(() => {
  if (!store.loaded && typeof store.cargarDestinos === 'function') {
    store.cargarDestinos()
  }
})

const enviarReserva = async () => {
  if (!form.nombre || !form.email || !form.destinoId) return

  enviando.value = true
  try {
    const res = await $fetch<{ mensaje: string }>('/api/reservas', {
      method: 'POST',
      body: form
    })
    mensajeExito.value = res.mensaje
  } catch (err) {
    console.error('Error al realizar reserva:', err)
  } finally {
    enviando.value = false
  }
}
</script>