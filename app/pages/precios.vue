<template>
  <v-container class="py-8">
    <h1 class="text-h3 font-weight-bold mb-2">Lista de Precios</h1>
    <p class="text-body-1 text-medium-emphasis mb-6">
      Compara los planes y costos de nuestros paquetes turísticos.
    </p>

    <v-card elevation="2" rounded="lg">
      <v-table>
        <thead>
          <tr>
            <th class="text-left font-weight-bold">Destino</th>
            <th class="text-left font-weight-bold">Ubicación</th>
            <th class="text-left font-weight-bold">Duración</th>
            <th class="text-left font-weight-bold">Precio Base</th>
            <th class="text-center font-weight-bold">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in store.destinations" :key="item.id">
            <td class="font-weight-medium">{{ item.name }}</td>
            <td>{{ item.country }} • {{ item.region }}</td>
            <td>{{ item.duration }}</td>
            <td class="text-primary font-weight-bold">
              ${{ item.price.toLocaleString() }} COP
            </td>
            <td class="text-center">
              <v-btn
                color="primary"
                variant="tonal"
                size="small"
                :to="`/reservar?destino=${item.id}`"
              >
                Reservar
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useTravelStore } from '~/stores/travel'

const store = useTravelStore()

onMounted(() => {
  if (!store.loaded && typeof store.cargarDestinos === 'function') {
    store.cargarDestinos()
  }
})
</script>