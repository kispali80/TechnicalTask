import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { AddToCartButton } from './AddToCartButton'
import { AddToCartButtonProps } from '~types/components'
import products from '../../../__mocks__/products.json'

describe('renders the Add to Cart button component', () => {
    const onAddProduct = jest.fn()
    const product = products[0]
    const data = {
        id: product?.id || '',
        amountAdded: 1,
        onAddProduct: onAddProduct,
        availableAmount: product?.availableAmount,
        isLoading: false,
    }

    const setup = (props?: AddToCartButtonProps) => {
        return render(
            <AddToCartButton
                id={product?.id || ''}
                amountAdded={1}
                onAddProduct={onAddProduct}
                availableAmount={product?.availableAmount || 0}
                isLoading={false}
                {...props}
            />
        )
    }

    it('renders with the expected text', () => {
        setup()
        expect(screen.getByText('Add to Cart')).toBeInTheDocument()
    })

    it('renders with disabled state', () => {
        setup({ ...data, availableAmount: 0 })
        expect(
            screen.getByTestId('addToCartButton-628639c1bcb9946a0c')
        ).toHaveAttribute('disabled')
    })

    it('renders with loading state', () => {
        setup({ ...data, isLoading: true })
        expect(
            screen.getByTestId('addToCartButton-628639c1bcb9946a0c')
        ).toHaveAttribute('disabled')
        expect(
            screen.getByTestId('addToCartButtonLoader-628639c1bcb9946a0c')
        ).toBeInTheDocument()
    })

    it('triggers the click interaction', () => {
        setup()
        fireEvent.click(
            screen.getByTestId('addToCartButton-628639c1bcb9946a0c')
        )
        expect(onAddProduct).toBeCalledTimes(1)
    })
})
