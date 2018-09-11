import round from './round'

const ceilValue = (ceil: (t: number) => number) =>
  (val: number) => Math.max(ceil(val + 0.5) - val, 0)

const alignTime = (currentTimeGetter: () => number) =>
  (alignTimeframe: number) => {
    const ceilTime = ceilValue(round(alignTimeframe, Math.ceil))
    return (currentTime = currentTimeGetter()) => ceilTime(currentTime)
  }

export default alignTime
