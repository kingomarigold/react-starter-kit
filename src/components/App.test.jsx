import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { WELCOME_HEADING } from '../constants/HomeConstants'


describe('[App Component Test Suite]', () => {
  test('should pass if app component is able to render successfully', () => {
    render(<App />)
  })

  test('Should render the home screen by default', () => {
    render(<App />)
    expect(screen.getByText(WELCOME_HEADING)).toBeInTheDocument()
  })
})
