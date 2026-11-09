export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Validación básica de campos vacíos
  if (!body.nombre || !body.email || !body.destinoId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Faltan campos obligatorios en la reserva'
    })
  }

  return {
    success: true,
    mensaje: '¡Reserva confirmada con éxito!',
    datos: body
  }
})