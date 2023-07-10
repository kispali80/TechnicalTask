import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Price } from './Price'
import { ProductPriceProps } from '~types/product'

describe('renders the Price component', () => {
    const setup = (props?: ProductPriceProps) => {
        return render(<Price value={990} {...props} />)
    }

    it('renders with no amount set', () => {
        setup()
        expect(screen.getByTestId('price')).toBeInTheDocument()
        expect(screen.getByText('10€')).toBeInTheDocument()
    })

    it('renders with 1 amount set', () => {
        setup()
        expect(screen.getByTestId('price')).toBeInTheDocument()
        expect(screen.getByText('10€')).toBeInTheDocument()
    })

    it('renders with 10 amount set', () => {
        setup()
        expect(screen.getByTestId('price')).toBeInTheDocument()
        expect(screen.getByText('100€')).toBeInTheDocument()
    })
})
