import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CartItem } from './CartItem'
import cartItems from '../../..//mocks/cart-items.json'

describe('renders the Cart Item component', () => {
    const onRemoveItem = jest.fn()
    const onUpdateItem = jest.fn()

    const setup = () => {
        const cartItem = cartItems.shift()
        if (cartItem) {
            return render(
                <CartItem
                    id={cartItem.id}
                    name={cartItem.name}
                    img={cartItem.img}
                    price={cartItem.price}
                    amount={cartItem.amount}
                    onRemoveItem={onRemoveItem}
                    onUpdateItem={onUpdateItem}
                />
            )
        }
    }

    it('renders the content', () => {
        setup()
        expect(screen.getByTestId('cartItem')).toBeInTheDocument()
        expect(screen.getByTestId('cartItemImage')).toBeInTheDocument()
        expect(
            screen.getByTestId('cartItemImage').getAttribute('src')
        ).toContain(
            'https://media.gettyimages.com/photos/bolts-and-nuts-picture-id175425827?s=2048x2048'
        )
        expect(screen.getByTestId('updateCartButton')).toBeInTheDocument()
        expect(screen.getByTestId('removeCartButton')).toBeInTheDocument()
        expect(screen.getByText('Test Product 1')).toBeInTheDocument()
        expect(screen.getByText('Qty: 22')).toBeInTheDocument()
        expect(screen.getByText('Price: 105.60€')).toBeInTheDocument()
    })
})
