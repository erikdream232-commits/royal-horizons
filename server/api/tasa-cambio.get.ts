interface ExchangeRateApiResponse {
  result: string
  rates?: {
    COP?: number
  }
}

export default defineEventHandler(async () => {
  let response: ExchangeRateApiResponse

  try {
    response = await $fetch<ExchangeRateApiResponse>('https://open.er-api.com/v6/latest/USD', {
      timeout: 8000,
    })
  } catch {
    throw createError({
      statusCode: 502,
      statusMessage: 'No fue posible consultar la tasa de cambio',
    })
  }

  const rate = response.rates?.COP
  if (response.result !== 'success' || typeof rate !== 'number' || !Number.isFinite(rate) || rate <= 0) {
    throw createError({
      statusCode: 502,
      statusMessage: 'La tasa de cambio recibida no es válida',
    })
  }

  return { rate }
})
