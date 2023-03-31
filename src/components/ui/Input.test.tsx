import React from 'react'
import { render, screen } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
  test('renders an input element', () => {
    render(<Input />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
  })

  test('sets the correct input type', () => {
    render(<Input type="email" />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveAttribute('type', 'email')
  })

  test('sets the correct input id', () => {
    const testId = 'test-input'
    render(<Input id={testId} />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveAttribute('id', testId)
  })
})
