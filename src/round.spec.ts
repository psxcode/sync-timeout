import { expect } from 'chai'
import round from './round'

describe('[ round ]', () => {

  it('should floor values properly', () => {
    const floor15 = round(Math.floor)(15)
    const given = [59, 32, 15, 0, -4, 37.5]
    const expected = [45, 30, 15, 0, -15, 30]
    const result = given.map(floor15)

    expect(result).deep.eq(expected)
  })

  it('should ceil values properly', () => {
    const floor15 = round(Math.ceil)(15)
    const given = [59, 32, 15, 0, -4, 37.5]
    const expected = [60, 45, 15, 0, -0, 45]
    const result = given.map(floor15)

    expect(result).deep.eq(expected)
  })
})
