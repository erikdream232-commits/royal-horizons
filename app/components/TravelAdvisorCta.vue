<template>
  <section class="content-section pt-0">
    <v-container>
      <div class="advisor-cta">
        <div>
          <p class="section-kicker">Atención personal</p>
          <h2 class="section-heading">¿Tienes otro destino en mente?</h2>
          <p class="section-copy">Cuéntanos qué buscas y diseñaremos una propuesta para ti.</p>
        </div>
        <v-btn class="btn-primary flex-shrink-0" color="primary" to="/reservar" variant="flat" size="large">
          Hablar con un asesor
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.advisor-cta {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  border-radius: 7px;
  background: #e9eee5;
}

@media (min-width: 960px) {
  .advisor-cta {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 40px;
  }
}
</style>
