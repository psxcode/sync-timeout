import { Timeframe } from './types'
import { ping as p } from '@psxcode/wait'
import alignedTimeGetter from './aligned-time-getter'
import { isTimeframe, timeframes as tf } from './timeframes'

export const syncIntervalEx = (timeGetter: () => number) =>
  (timeframe: number | Timeframe, offsetMs = 0) =>
    p(alignedTimeGetter(() => timeGetter() + offsetMs)(
      isTimeframe(timeframe)
        ? tf[timeframe]
        : timeframe
    ))

export default syncIntervalEx(Date.now)
