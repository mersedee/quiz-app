import { render } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders with children', () => {
    const { getByText } = render(<Card>Test</Card>)
    expect(getByText('Test')).toBeInTheDocument()
  })

  it('renders with className', () => {
    const { container } = render(<Card className="test-class">Test</Card>)
    expect(container.firstChild).toHaveClass('test-class')
  })
})
