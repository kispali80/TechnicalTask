import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Price } from './Price'
import { ProductPriceProps } from '~types/product'

describe('renders the Price component', () => {
    const data = {
        value: 990,
    }
    const setup = (props?: ProductPriceProps) => {
        return render(<Price value={990} {...props} />)
    }

    it('renders with no amount set', () => {
        setup()
        expect(screen.getByTestId('price')).toBeInTheDocument()
        expect(screen.getByText('Price: 990€')).toBeInTheDocument()
    })

    it('renders with 1 amount set', () => {
        setup({ ...data, amount: 1 })
        expect(screen.getByTestId('price')).toBeInTheDocument()
        expect(screen.getByText('Price: 990€')).toBeInTheDocument()
    })

    it('renders with 10 amount set', () => {
        setup({ ...data, amount: 10 })
        expect(screen.getByTestId('price')).toBeInTheDocument()
        expect(screen.getByText('Price: 9900€')).toBeInTheDocument()
    })

    it('renders the value with decimal points', () => {
        setup({ value: 0.356, amount: 199 })
        expect(screen.getByTestId('price')).toBeInTheDocument()
        expect(screen.getByText('Price: 70.84€')).toBeInTheDocument()
    })
})
