<template>
  <v-container class="py-8">
    <h1 class="text-h4 font-weight-bold mb-2">Mis Reservas</h1>
    <p class="text-subtitle-1 text-medium-emphasis mb-6">
      Gestiona y consulta el estado de tus próximos viajes.
    </p>

    <!-- Estado cuando no hay reservas -->
    <v-card v-if="reservas.length === 0" variant="outlined" class="pa-8 text-center rounded-lg">
      <v-icon icon="mdi-calendar-blank" size="64" color="grey" class="mb-4" />
      <h3 class="text-h6 font-weight-medium">No tienes reservas activas</h3>
      <p class="text-body-2 text-medium-emphasis mb-4">
        Explora nuestro catálogo y planifica tu próxima aventura.
      </p>
      <v-btn color="primary" to="/" variant="flat">Explorar Destinos</v-btn>
    </v-card>

    <!-- Tarjetas de reservas -->
    <v-row v-else>
      <v-col
        v-for="reserva in reservas"
        :key="reserva.id"
        cols="12"
        md="6"
      >
        <v-card border elevation="1" class="rounded-lg">
          <v-img :src="reserva.imagen" height="180" cover />

          <v-card-item class="pt-4">
            <div class="d-flex justify-space-between align-center mb-2">
              <span class="text-caption text-uppercase font-weight-bold text-primary">
                Código: {{ reserva.id }}
              </span>
              <v-chip
                :color="reserva.estado === 'Confirmada' ? 'success' : 'warning'"
                size="small"
                variant="tonal"
                class="font-weight-medium"
              >
                {{ reserva.estado }}
              </v-chip>
            </div>

            <v-card-title class="text-h6 font-weight-bold pa-0 mb-1">
              {{ reserva.destino }}
            </v-card-title>
            <v-card-subtitle class="pa-0">
              Fecha: {{ reserva.fecha }} | {{ reserva.personas }} viajero(s)
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <div class="text-subtitle-1 font-weight-bold text-primary">
              Total: ${{ reserva.total.toLocaleString('es-CO') }} COP
            </div>
          </v-card-text>

          <v-divider />

          <v-card-actions class="justify-end pa-3">
            <v-btn
              color="error"
              variant="text"
              size="small"
              @click="cancelarReserva(reserva.id)"
            >
              Cancelar Reserva
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
interface Reserva {
  id: string
  destino: string
  fecha: string
  personas: number
  estado: string
  total: number
  imagen: string
}

const reservas = ref<Reserva[]>([])

// Datos iniciales de ejemplo (solo se cargan la primera vez si no hay nada guardado)
const datosIniciales: Reserva[] = [
  {
    id: 'RES-8492',
    destino: 'Cartagena de Indias',
    fecha: '2026-12-15',
    personas: 2,
    estado: 'Confirmada',
    total: 2400000,
    imagen: 'https://images.unsplash.com/photo-1583531172005-814191b8b6c0'
  },
  {
    id: 'RES-9104',
    destino: 'San Andrés Isla',
    fecha: '2027-01-20',
    personas: 1,
    estado: 'Pendiente',
    total: 1600000,
    imagen: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f'
  }
]

onMounted(() => {
  const guardadas = localStorage.getItem('royal_reservas')
  if (guardadas !== null) {
    reservas.value = JSON.parse(guardadas)
  } else {
    reservas.value = datosIniciales
    localStorage.setItem('royal_reservas', JSON.stringify(datosIniciales))
  }
})

const cancelarReserva = (id: string) => {
  reservas.value = reservas.value.filter(r => r.id !== id)
  localStorage.setItem('royal_reservas', JSON.stringify(reservas.value))
}
</script>