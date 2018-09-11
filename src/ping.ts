import { Timeframe } from './types'
import { ping as p } from '@psxcode/wait'
import alignTime from './align-time'
import { isTimeframe, timeframes as tf } from './timeframes'

export const pingEx = (timeGetter: () => number) =>
  (timeframe: number | Timeframe, offsetMs = 0) =>
    (callback: () => void) => {
      const t = alignTime(() => timeGetter() + offsetMs)
      return () => {
        return isTimeframe(timeframe)
          ? p(t(tf[timeframe]))(callback)()
          : p(t(timeframe))(callback)()

      }
    }

export default pingEx(Date.now)
