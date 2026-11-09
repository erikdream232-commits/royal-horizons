interface BookingRequest {
  travelerName?: string
  email?: string
  destinationId?: number
  departureDate?: string
  travelers?: number
}

export default defineEventHandler(async (event) => {
  const body = await readBody<BookingRequest>(event)
  const missingField = !body.travelerName?.trim()
    || !body.email?.trim()
    || !Number.isInteger(body.destinationId)
    || !body.departureDate
    || !Number.isInteger(body.travelers)
    || Number(body.travelers) < 1

  if (missingField) {
    throw createError({ statusCode: 400, statusMessage: 'Completa todos los campos de la reserva.' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email!)) {
    throw createError({ statusCode: 400, statusMessage: 'El correo electrónico no es válido.' })
  }

  return {
    reference: `RH-${Date.now().toString(36).toUpperCase()}`,
    message: 'Recibimos tu solicitud. Nuestro equipo se pondrá en contacto contigo para confirmar disponibilidad.',
  }
})
