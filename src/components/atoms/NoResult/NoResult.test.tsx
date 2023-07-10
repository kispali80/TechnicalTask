import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { NoResult } from './NoResult'

describe('renders the NoResult component', () => {
    const setup = () => {
        return render(<NoResult message="No results found" />)
    }

    it('renders when isLoading is true', () => {
        setup()
        expect(screen.getByTestId('noResults')).toBeInTheDocument()
        expect(screen.getByText('No results found')).toBeInTheDocument()
    })
})
