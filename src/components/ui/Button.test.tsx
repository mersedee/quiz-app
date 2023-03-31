import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me!</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-blue-500 text-white')
    expect(button).toHaveTextContent('Click me!')
  })

  it('renders correctly with secondary intent', () => {
    render(<Button intent="secondary">Click me!</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-gray-200 text-gray-900')
    expect(button).toHaveTextContent('Click me!')
  })

  it('renders correctly with fullWidth variant', () => {
    render(<Button fullWidth>Click me!</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('w-full')
    expect(button).toHaveTextContent('Click me!')
  })

  it('renders correctly as a link', () => {
    render(<Button href="https://example.com">Go to Example</Button>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveTextContent('Go to Example')
  })

  it('renders additional class name correctly', () => {
    render(<Button className="extra-class">Click me!</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('extra-class')
    expect(button).toHaveTextContent('Click me!')
  })
})
