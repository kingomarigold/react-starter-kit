import React from 'react'
import { render, act } from '@testing-library/react'
import Loader from './Loader'

describe('[Loader Component Test Suite]', () => {
  test('should pass if loader component can be loaded', () => {
    act(() => {
      render(<Loader />)
    })
  })
})
