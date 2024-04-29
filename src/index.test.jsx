import React from 'react'
import { act, screen, cleanup } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import Routes from './routes/Routes'
import { WELCOME_HEADING } from './constants/HomeConstants'
import { ERROR_CODE, ERROR_TEXT } from './constants/404Constants'
import { renderWithProviders } from './tests/setup/TestUtils'

describe('[Routing Test]', () => {

    afterEach(() => {
        cleanup()
    })

    test('If the default route is the home page', () => {
        act(() => {
            renderWithProviders(<BrowserRouter><Routes /></BrowserRouter>)
        })
        
        expect(screen.getByText(WELCOME_HEADING)).toBeInTheDocument()
    })

    test('Landing on the notfound page', async () => {
        act(() => {
            renderWithProviders(
                <MemoryRouter initialEntries={['/not-found']}>
                    <Routes />
                </MemoryRouter>
            )
        })
        
        expect(await screen.findByText(ERROR_CODE)).toBeInTheDocument()
        expect(await screen.findByText(ERROR_TEXT)).toBeInTheDocument()
    })
})