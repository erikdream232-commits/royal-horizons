<script setup lang="ts">
const { currency, usdToCopRate, loadingRate, rateError, toggleCurrency } = useCurrency()
</script>

<template>
  <div class="d-flex flex-column align-start ga-1">
    <v-btn
      color="primary"
      :loading="loadingRate"
      :disabled="loadingRate"
      variant="outlined"
      @click="toggleCurrency"
    >
      {{ currency === 'USD' ? 'Ver precios en COP' : 'Ver precios en USD' }}
    </v-btn>
    <span v-if="currency === 'COP' && usdToCopRate" class="text-caption text-medium-emphasis">
      Tasa referencial: 1 USD = {{ usdToCopRate.toLocaleString('es-CO') }} COP. Puede variar.
    </span>
    <span v-if="rateError" class="text-caption text-error" role="alert">
      {{ rateError }}
    </span>
  </div>
</template>
