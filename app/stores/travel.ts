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

  const regions = computed(() => ['Todas', ...new Set(destinations.value.map(destination => destination.region))])
  const filteredDestinations = computed(() => {
    const normalizedSearch = search.value.trim().toLocaleLowerCase()

    return destinations.value.filter((destination) => {
      const matchesSearch = !normalizedSearch
        || `${destination.name} ${destination.country} ${destination.description}`.toLocaleLowerCase().includes(normalizedSearch)
      const matchesRegion = region.value === 'Todas' || destination.region === region.value
      const matchesPrice = maxPrice.value === null || destination.price <= maxPrice.value

      return matchesSearch && matchesRegion && matchesPrice
    })
  })

  async function loadDestinations() {
    if (loaded.value || loading.value) return

    loading.value = true
    try {
      destinations.value = await $fetch<Destination[]>('/api/destinos')
      loaded.value = true
    } finally {
      loading.value = false
    }
  }

  function destinationById(id: number) {
    return destinations.value.find(destination => destination.id === id)
  }

  return {
    destinations,
    search,
    region,
    maxPrice,
    loading,
    regions,
    filteredDestinations,
    loadDestinations,
    destinationById,
  }
})
