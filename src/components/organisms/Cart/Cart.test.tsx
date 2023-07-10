import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Cart } from './Cart'
import cartItems from '../../..//mocks/cart-items.json'
import { CartProps } from '~types/cart'

describe('renders the Cart component', () => {
    const onRemoveItem = jest.fn()
    const onUpdateItem = jest.fn()
    const onRemoveAll = jest.fn()

    const data = {
        isLoading: false,
        items: cartItems,
        onRemoveItem,
        onUpdateItem,
        onRemoveAll,
    }

    const setup = (args?: CartProps) => {
        return render(
            <Cart
                isLoading={false}
                items={cartItems}
                onRemoveItem={onRemoveItem}
                onUpdateItem={onUpdateItem}
                onRemoveAll={onRemoveAll}
                {...args}
            />
        )
    }

    it('renders the loading content when the cart is being updated', () => {
        setup({ ...data, isLoading: true })
        expect(screen.getByText('Cart items')).toBeInTheDocument()
        expect(screen.getByTestId('loading')).toBeInTheDocument()
        expect(
            screen.getByTestId('loadingImage').getAttribute('src')
        ).toContain('/loading.gif')
        expect(screen.queryByText('Totals')).not.toBeInTheDocument()
    })

    it('renders the empty cart', () => {
        setup({ ...data, items: [] })
        expect(screen.getByText('Cart items')).toBeInTheDocument()
        expect(screen.getByText('Your cart is empty')).toBeInTheDocument()
        expect(screen.queryByText('Totals')).not.toBeInTheDocument()
    })

    it('renders the cart when the are items already added', () => {
        setup()
        expect(screen.getByText('Cart items')).toBeInTheDocument()
        expect(screen.getAllByText('Update')).toHaveLength(4) // Should match the number of products in the mock
        expect(screen.queryByText('Your cart is empty')).not.toBeInTheDocument()
        expect(
            screen.getByTestId('cartItem-628639c1bcb9946a0c')
        ).toBeInTheDocument()
        expect(
            screen.getByTestId('cartItemImage-628639c1bcb9946a0c')
        ).toBeInTheDocument()
        expect(
            screen
                .getByTestId('cartItemImage-628639c1bcb9946a0c')
                .getAttribute('src')
        ).toContain(
            'https://media.gettyimages.com/photos/bolts-and-nuts-picture-id175425827?s=2048x2048'
        )
        expect(
            screen.getByTestId('updateCartButton-628639c1bcb9946a0c')
        ).toBeInTheDocument()
        expect(
            screen.getByTestId('removeCartButton-628639c1bcb9946a0c')
        ).toBeInTheDocument()
        expect(screen.getByText('Test Product 1')).toBeInTheDocument()
        expect(screen.getByText('Qty: 22')).toBeInTheDocument()
        expect(screen.getByText('Price: 105.60€')).toBeInTheDocument()
        expect(screen.getByText('Totals')).toBeInTheDocument()
        expect(screen.getByText('Qty: 92')).toBeInTheDocument()
        expect(screen.getByText('Price: 11605.60€')).toBeInTheDocument()
        expect(screen.getByText('Remove All')).toBeInTheDocument()
    })
})
