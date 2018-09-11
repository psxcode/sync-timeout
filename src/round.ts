const round = (roundTo: number, roundingFn: typeof Math.round) => {
  if (roundTo <= 0) {
    throw new Error(`cannot round to ${roundTo}`)
  }

  return (value: number) => roundingFn(value / roundTo) * roundTo
}

export default round
