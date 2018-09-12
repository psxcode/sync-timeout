const round = (roundingFn: typeof Math.round) => (roundTo: number) => {
  if (roundTo <= 0) {
    throw new Error(`cannot round to ${roundTo}`)
  }

  return (value: number) => roundingFn(value / roundTo) * roundTo
}

export default round
