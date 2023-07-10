import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { AddToCartButton } from './AddToCartButton'
import { AddToCartButtonProps } from '~types/components'
import products from '../../..//mocks/products.json'

describe('renders the Add to Cart button component', () => {
    const onAddProduct = jest.fn()

    const setup = (props?: AddToCartButtonProps) => {
        const product = products.shift()
        if (product) {
            return render(
                <AddToCartButton
                    id={product.id}
                    amountAdded={1}
                    onAddProduct={onAddProduct}
                    availableAmount={product.availableAmount}
                    {...props}
                />
            )
        }
    }

    it('renders with the expected text', () => {
        setup()
        expect(screen.getByText('Add to Cart')).toBeInTheDocument()
    })

    it('renders with disabled state', () => {
        setup({ availableAmount: 0 })
        expect(screen.getByTestId('addToCartButton')).toHaveAttribute(
            'disabled'
        )
    })

    it('triggers the click interaction', () => {
        setup()
        fireEvent.click(screen.getByTestId('addToCartButton'))
        expect(onAddProduct).toBeCalledTimes(1)
    })
})
