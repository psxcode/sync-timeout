import { Timeframe } from './types'
import { waitPromise as w } from '@psxcode/wait'
import alignTime from './align-time'
import { isTimeframe, timeframes as tf } from './timeframes'

const syncTimeoutPromiseEx = (timeGetter: () => number) =>
  (timeframe: number | Timeframe, offsetMs = 0) => {
    const t = alignTime(() => timeGetter() + offsetMs)
    return isTimeframe(timeframe)
      ? w(t(tf[timeframe]))()
      : w(t(timeframe))()
  }

export default syncTimeoutPromiseEx(Date.now)
