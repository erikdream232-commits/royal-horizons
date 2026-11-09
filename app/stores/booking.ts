import { defineStore } from 'pinia'

export interface Reserva {
  id: string
  destino: string
  fecha: string
  personas: number
  estado: string
  total: number
  imagen: string
}

export const useBookingStore = defineStore('booking', () => {
  const reservas = ref<Reserva[]>([])

  const cargarReservas = () => {
    const guardadas = localStorage.getItem('royal_reservas')
    if (guardadas) {
      reservas.value = JSON.parse(guardadas)
    } else {
      const iniciales: Reserva[] = [
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
      reservas.value = iniciales
      localStorage.setItem('royal_reservas', JSON.stringify(iniciales))
    }
  }

  const cancelarReserva = (id: string) => {
    reservas.value = reservas.value.filter(r => r.id !== id)
    localStorage.setItem('royal_reservas', JSON.stringify(reservas.value))
  }

  return {
    reservas,
    cargarReservas,
    cancelarReserva
  }
})