import { expect } from 'chai'
import alignedTimeGetter from './aligned-time-getter'

describe('[ alignedTimeGetter ]', () => {
  it('should work', () => {
    const getter = () => 999
    expect(alignedTimeGetter(getter)(1000)()).eq(1)
  })

  it('should work', () => {
    const getter = () => 1251
    expect(alignedTimeGetter(getter)(1000)()).eq(749)
  })

  it('should work', () => {
    const getter = () => 1000
    expect(alignedTimeGetter(getter)(1000)()).eq(1000)
  })
})
