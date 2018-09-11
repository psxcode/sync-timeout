import { Timeframe } from './types'

export const timeframes: {[k in Timeframe]: number} = {
  '1s': 1000,
  '5s': 5 * 1000,
  '10s': 10 * 1000,
  '15s': 15 * 1000,
  '30s': 30 * 1000,
  '1m': 60 * 1000,
  '5m': 5 * 60 * 1000,
  '10m': 10 * 60 * 1000,
  '15m': 15 * 60 * 1000,
  '30m': 30 * 60 * 1000,
  '1h': 60 * 60 * 1000,
  '3h': 3 * 60 * 60 * 1000,
  '6h': 6 * 60 * 60 * 1000,
  '12h': 12 * 60 * 60 * 1000,
  '1d': 24 * 60 * 60 * 1000
}

export const isTimeframe = (value: any): value is Timeframe => {
  return Reflect.has(timeframes, value)
}
