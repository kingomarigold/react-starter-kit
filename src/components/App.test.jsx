import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import App from './App'
import { WELCOME_HEADING } from '../constants/HomeConstants'
import {renderWithProviders} from '../tests/setup/TestUtils'


describe('[App Component Test Suite]', () => {
  beforeEach(() => {
    renderWithProviders(<App />)
  })
  
  afterEach(() => {
    cleanup()
  })

  test('Should render the home screen by default', () => {
    expect(screen.getByText(WELCOME_HEADING)).toBeInTheDocument()
  })

  
})
