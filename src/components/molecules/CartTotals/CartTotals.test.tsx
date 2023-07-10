import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CartTotals } from './CartTotals'
import cartItems from '../../../__mocks__/cart-items.json'

describe('renders the Cart Totals component', () => {
    const setup = () => {
        if (cartItems) {
            return render(<CartTotals items={cartItems} />)
        }
    }

    it('renders the content', () => {
        setup()
        expect(screen.getByText('Totals')).toBeInTheDocument()
        expect(screen.getByText('Qty: 92')).toBeInTheDocument()
        expect(screen.getByText('Price: 11605.60€')).toBeInTheDocument()
    })
})
