import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import NotFound from './NotFound'

describe('NotFound', () => {
  it('should render properly', () => {
    render(<NotFound />)
    expect(screen.getByTestId('my-test-id')).toBeDefined();
  })
})