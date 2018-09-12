import { Timeframe } from './types'
import { wait as w } from '@psxcode/wait'
import alignedTimeGetter from './aligned-time-getter'
import { isTimeframe, timeframes as tf } from './timeframes'

export const syncTimeoutEx = (timeGetter: () => number) =>
  (timeframe: number | Timeframe, offsetMs = 0) =>
    (callback: () => void) => {
      const t = alignedTimeGetter(() => timeGetter() + offsetMs)(
        isTimeframe(timeframe)
          ? tf[timeframe]
          : timeframe
      )
      return w(t)(callback)()
    }

export default syncTimeoutEx(Date.now)
