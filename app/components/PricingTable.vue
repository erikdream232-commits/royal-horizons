<script setup lang="ts">
import type { Destination } from '~/stores/travel'

defineProps<{ destinations: Destination[] }>()
const { formatPrice } = useCurrency()
</script>

<template>
  <section class="content-section">
    <v-container>
      <div class="price-table-wrap">
        <v-table class="price-table">
          <thead>
            <tr>
              <th scope="col">Destino</th>
              <th scope="col">Duración</th>
              <th scope="col">Incluye</th>
              <th scope="col">Desde</th>
              <th scope="col"><span class="sr-only">Acción</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="destination in destinations" :key="destination.id">
              <td>
                <strong>{{ destination.name }}</strong>
                <div class="text-medium-emphasis text-caption">{{ destination.country }}</div>
              </td>
              <td>{{ destination.duration }}</td>
              <td>{{ destination.highlight }}</td>
              <td><strong>{{ formatPrice(destination.price) }}</strong></td>
              <td>
                <v-btn class="btn-primary" color="primary" :to="`/reservar?destino=${destination.id}`" size="small" variant="flat">
                  Reservar
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <p class="section-copy mt-5">Los importes son orientativos y no incluyen gastos personales ni servicios opcionales.</p>
    </v-container>
  </section>
</template>
