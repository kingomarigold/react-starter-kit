import React from 'react'
import { fireEvent, screen, cleanup, act } from '@testing-library/react'
import { WELCOME_HEADING, LOGIN_ID, LOGOUT_ID, 
  USERNAME_ID, TOKEN_ID, ROLES_ID } from '../../constants/HomeConstants'
import Home from './Home'
import {renderWithProviders} from '../../tests/setup/TestUtils'


describe('[Home Component Static Test Suite]', () => {
  beforeEach(() => {
    renderWithProviders(<Home />)
  })

  afterEach(() => {
    cleanup()
  })

  test('should pass if "React Enterprise Starter Kit" is found in the document', () => {
    expect(screen.getByText(WELCOME_HEADING)).toBeInTheDocument()
  })

  test('Should contain the log in button', () => {
    expect(screen.getByTestId(LOGIN_ID)).toBeInTheDocument()
  })

  test('Should contain the log out button', () => {
    expect(screen.getByTestId(LOGOUT_ID)).toBeInTheDocument()
  })
})

describe('[Hoem Component Behavior Test Suite]', () => {
  beforeEach(() => {
    renderWithProviders(<Home />)
  })

  afterEach(() => {
    cleanup()
  })

  test('Should be able to click on the login button and see the user details', () => {
    const loginBtn = screen.getByTestId(LOGIN_ID)
    act(() => {
      fireEvent.click(loginBtn)
    })
    const userName = screen.getByTestId(USERNAME_ID)
    expect(userName).toBeInTheDocument()
    expect(userName).toHaveTextContent('Test')
    const tokenId = screen.getByTestId(TOKEN_ID)
    expect(tokenId).toBeInTheDocument()
    expect(tokenId).toHaveTextContent('123')
    const roles = screen.getAllByTestId(ROLES_ID)
    expect(roles.length).toBe(2)
    expect(roles[0]).toHaveTextContent('Admin')
    expect(roles[1]).toHaveTextContent('Clinician')
  })
})
