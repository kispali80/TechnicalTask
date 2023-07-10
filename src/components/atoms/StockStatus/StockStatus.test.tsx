import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { StockStatus } from './StockStatus'
import { ProductStockStatus } from '~types/product'

describe('renders the StockStatus component', () => {
    const data = {
        minOrderAmount: 10,
    }
    const setup = (props?: ProductStockStatus) => {
        return render(
            <StockStatus availableAmount={100} minOrderAmount={10} {...props} />
        )
    }

    it('renders when the product is in stock and there are more than 1', () => {
        setup()
        expect(screen.getByTestId('stockStatus')).toBeInTheDocument()
        expect(screen.getByText('In Stock')).toBeInTheDocument()
        expect(screen.getByText('Available Qty: 100')).toBeInTheDocument()
        expect(
            screen.getByText('10 piece(s) is the minimum per transaction')
        ).toBeInTheDocument()
    })

    it('renders when the product is in stock and there is 1 left', () => {
        setup({ ...data, availableAmount: 1 })
        expect(screen.getByTestId('stockStatus')).toBeInTheDocument()
        expect(screen.getByText('In Stock')).toBeInTheDocument()
        expect(screen.getByText('Only 1 left')).toBeInTheDocument()
        expect(
            screen.getByText('10 piece(s) is the minimum per transaction')
        ).toBeInTheDocument()
    })

    it('renders when the no product left in stock', () => {
        setup({ ...data, availableAmount: 0 })
        expect(screen.getByTestId('stockStatus')).toBeInTheDocument()
        expect(screen.getByText('Out of Stock')).toBeInTheDocument()
        expect(screen.queryByText('In Stock')).not.toBeInTheDocument()
        expect(
            screen.getByText('Sorry, no more product left')
        ).toBeInTheDocument()
    })
})
