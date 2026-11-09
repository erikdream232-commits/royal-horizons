<script setup lang="ts">
useHead({
  title: 'Royal Horizons | Viajes con perspectiva',
  meta: [{ name: 'description', content: 'Viajes cuidadosamente diseñados para descubrir el mundo a tu manera.' }],
})
</script>

<template>
  <div>
    <SiteHeader />

    <v-main>
      <slot />
    </v-main>

    <SiteFooter />
  </div>
</template>
