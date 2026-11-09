type Currency = 'USD' | 'COP'

interface ExchangeRateResponse {
  rate: number
}

export function useCurrency() {
  const currency = useState<Currency>('display-currency', () => 'USD')
  const usdToCopRate = useState<number | null>('usd-to-cop-rate', () => null)
  const loadingRate = useState('loading-usd-to-cop-rate', () => false)
  const rateError = useState<string | null>('usd-to-cop-rate-error', () => null)

  function formatPrice(usdAmount: number) {
    const amount = currency.value === 'COP' && usdToCopRate.value
      ? usdAmount * usdToCopRate.value
      : usdAmount

    return new Intl.NumberFormat(currency.value === 'COP' ? 'es-CO' : 'en-US', {
      style: 'currency',
      currency: currency.value,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  async function toggleCurrency() {
    rateError.value = null

    if (currency.value === 'COP') {
      currency.value = 'USD'
      return
    }

    if (usdToCopRate.value === null) {
      loadingRate.value = true
      try {
        const response = await $fetch<ExchangeRateResponse>('/api/tasa-cambio')
        usdToCopRate.value = response.rate
      } catch {
        rateError.value = 'No fue posible consultar la tasa de cambio. Intenta de nuevo.'
        return
      } finally {
        loadingRate.value = false
      }
    }

    currency.value = 'COP'
  }

  return { currency, usdToCopRate, loadingRate, rateError, formatPrice, toggleCurrency }
}
