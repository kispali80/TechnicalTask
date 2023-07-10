import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { CartButtons } from './CartButtons'
import cartItems from '../../..//mocks/cart-items.json'

describe('renders the Cart Buttons component', () => {
    const onRemoveItem = jest.fn()
    const onUpdateItem = jest.fn()

    const setup = () => {
        const cartItem = cartItems.shift()
        if (cartItem) {
            return render(
                <CartButtons
                    id={cartItem.id}
                    amount={cartItem.amount}
                    onRemoveItem={onRemoveItem}
                    onUpdateItem={onUpdateItem}
                />
            )
        }
    }

    it('renders the buttons with text and the amount field', () => {
        setup()
        expect(screen.getByText('Update')).toBeInTheDocument()
        expect(screen.getByText('Remove')).toBeInTheDocument()
        expect(screen.getByText('Desired amount')).toBeInTheDocument()
        expect(screen.getByTestId('updateCartAmount')).toBeInTheDocument()
    })

    it('triggers the click interaction for update button', () => {
        setup()
        fireEvent.click(screen.getByTestId('updateCartButton'))
        expect(onUpdateItem).toBeCalledTimes(1)
    })

    it('triggers the click interaction for remove button', () => {
        setup()
        fireEvent.click(screen.getByTestId('removeCartButton'))
        expect(onRemoveItem).toBeCalledTimes(1)
    })
})
