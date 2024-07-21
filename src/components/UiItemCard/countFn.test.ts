import { describe, expect, it } from 'vitest'
import { decrement } from './countFn'

describe('counting function', () => {
  it('should render properly', () => {
    expect(decrement).not.toBeNaN()
  })
})
