import { Timeframe } from './types'
import { waitPromise as w } from '@psxcode/wait'
import alignedTimeGetter from './aligned-time-getter'
import { isTimeframe, timeframes as tf } from './timeframes'

export const syncTimeoutPromiseEx = (timeGetter: () => number) =>
  (timeframe: number | Timeframe, offsetMs = 0) => {
    const t = alignedTimeGetter(() => timeGetter() + offsetMs)(
      isTimeframe(timeframe)
        ? tf[timeframe]
        : timeframe
    )
    return w(t)()
  }

export default syncTimeoutPromiseEx(Date.now)
