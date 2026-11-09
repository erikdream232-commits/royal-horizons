import { defineStore } from 'pinia'

export interface Destination {
  id: number
  name: string
  country: string
  region: string
  duration: string
  price: number
  image: string
  imageAlt: string
  description: string
  highlight: string
}

export const useTravelStore = defineStore('travel', () => {
  const destinations = ref<Destination[]>([])
  const search = ref('')
  const region = ref('Todas')
  const maxPrice = ref<number | null>(null)
  const loading = ref(false)
  const loaded = ref(false)

  const regions = computed(() => [
    'Todas',
    ...new Set(destinations.value.map(d => d.region).filter(Boolean))
  ])

  const filteredDestinations = computed(() => {
    // Convierte el valor a string seguro aunque sea null al limpiar el buscador
    const query = (search.value || '').trim().toLowerCase()

    if (!Array.isArray(destinations.value)) return []

    return destinations.value.filter(d => {
      if (!d) return false
      const matchSearch = (d.name?.toLowerCase() || '').includes(query) || 
                          (d.country?.toLowerCase() || '').includes(query)
      const matchRegion = region.value === 'Todas' || d.region === region.value
      return matchSearch && matchRegion
    })
  })

  const cargarDestinos = async () => {
    loading.value = true
    try {
      const data = await $fetch<Destination[]>('/api/destinos')
      destinations.value = data || []
      loaded.value = true
    } catch (err) {
      console.error('Error cargando destinos:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    destinations,
    search,
    region,
    maxPrice,
    loading,
    loaded,
    regions,
    filteredDestinations,
    cargarDestinos
  }
})