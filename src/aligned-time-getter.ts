import round from './round'

const ceil = round(Math.ceil)

const alignedTimeGetter = (currentTimeGetter: () => number) =>
  (alignTimeFrame: number) => {
    const c = ceil(alignTimeFrame)
    return () => {
      const time = currentTimeGetter()
      return c(time + 0.5) - time
    }
  }

export default alignedTimeGetter
