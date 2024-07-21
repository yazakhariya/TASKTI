import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import DeletedItem from './deletedItem'

describe('deleted card item', () => {
  it('should render properly', () => {
    render(<DeletedItem img={''} name={''} price={''} />)
    expect(screen.getByTestId('my-test-id')).toBeDefined()
  })
})

