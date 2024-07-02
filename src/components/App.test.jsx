import React from 'react'
import { act, screen, cleanup } from '@testing-library/react'
import App from './App'
import { WELCOME_HEADING } from '../constants/HomeConstants'
import { renderWithProviders } from '../tests/setup/TestUtils'


describe('[App Component Test Suite]', () => {
  
  afterEach(() => {
    cleanup()
  })

  test('Should render the home screen by default', () => {
    act(() => {
      renderWithProviders(<App />)
    })
    expect(screen.getByText(WELCOME_HEADING)).toBeInTheDocument()
  })
  
})
