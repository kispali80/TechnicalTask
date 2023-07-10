import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { SuccessMessageItem } from './SuccessMessageItem'

describe('renders the Success Message Item component', () => {
    const setup = () => {
        return render(<SuccessMessageItem message="Test success message" />)
    }

    it('renders the success message', () => {
        setup()
        expect(screen.getByTestId('successMessageItem')).toBeInTheDocument()
        expect(screen.getByText('Test success message')).toBeInTheDocument()
    })
})
