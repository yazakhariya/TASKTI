import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import NotFound from './NotFound'

describe('NotFound', () => {

  it('should have a proper type', () => {
    render(<NotFound />)
    expect(screen.getByTestId('my-test-id')).toBeTypeOf('object')
  })

  it('should match snapshot', () => {
    render(<NotFound />)
    expect(screen.getByTestId('my-test-id')).toMatchSnapshot()
  })
})
