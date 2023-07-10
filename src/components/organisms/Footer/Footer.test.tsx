import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('renders the Footer component', () => {
    const setup = () => {
        return render(<Footer />)
    }

    it('renders the content', () => {
        setup()
        expect(
            screen.getByText('Technical Task - Copyright 2023')
        ).toBeInTheDocument()
    })
})
