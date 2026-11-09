<script setup lang="ts">
defineProps<{
  kicker: string
  title: string
  description: string
}>()
</script>

<template>
  <section class="page-intro">
    <v-container>
      <p class="section-kicker">{{ kicker }}</p>
      <h1 class="section-heading">{{ title }}</h1>
      <p class="section-copy">{{ description }}</p>
    </v-container>
  </section>
</template>
