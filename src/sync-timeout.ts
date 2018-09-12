import { Timeframe } from './types'
import { wait as w } from '@psxcode/wait'
import alignTime from './align-time'
import { isTimeframe, timeframes as tf } from './timeframes'

export const syncTimeoutEx = (timeGetter: () => number) =>
  (timeframe: number | Timeframe, offsetMs = 0) =>
    (callback: () => void) => {
      const t = alignTime(() => timeGetter() + offsetMs)
      return isTimeframe(timeframe)
        ? w(t(tf[timeframe]))(callback)()
        : w(t(timeframe))(callback)()
    }

export default syncTimeoutEx(Date.now)
