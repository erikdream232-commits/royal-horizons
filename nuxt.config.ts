// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', 'vuetify-nuxt-module'],
  css: ['vuetify/styles', '~/assets/css/main.css'],
  vuetify: {
    moduleOptions: {
      prefixComposables: ['useLayout'],
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'royal',
        themes: {
          royal: {
            dark: false,
            colors: {
              background: '#f5f4ee',
              surface: '#ffffff',
              primary: '#173f36',
              secondary: '#c5dd86',
              accent: '#d47b62',
              error: '#b3261e',
              info: '#267c85',
              success: '#477b55',
              warning: '#b66b2e',
            },
          },
        },
      },
    },
  },
})
