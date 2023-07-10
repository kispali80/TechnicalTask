import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Product } from './Product'
import products from '../../../__mocks__/products.json'
import { ProductProps } from '~types/product'

describe('renders the Product component', () => {
    const onAddProduct = jest.fn()

    const product = products.shift()
    const data = {
        id: product?.id || '',
        name: product?.name || '',
        img: product?.img || '',
        price: product?.price || 0,
        minOrderAmount: product?.minOrderAmount || 0,
        onAddProduct,
    }

    const setup = (args?: ProductProps) => {
        return render(
            <Product
                id={product?.id || ''}
                name={product?.name || ''}
                img={product?.img || ''}
                price={product?.price || 0}
                availableAmount={product?.availableAmount || 0}
                minOrderAmount={product?.minOrderAmount || 0}
                onAddProduct={onAddProduct}
                {...args}
            />
        )
    }

    it('renders the content when product is available', () => {
        setup()
        expect(
            screen
                .getByTestId('productImage-628639c1bcb9946a0c')
                .getAttribute('src')
        ).toContain(
            'https://media.gettyimages.com/photos/bolts-and-nuts-picture-id175425827?s=2048x2048'
        )
        expect(screen.getByText('Test Product 1')).toBeInTheDocument()
        expect(screen.getByText('Price: 0.20€')).toBeInTheDocument()
        expect(screen.getByText('In Stock')).toBeInTheDocument()
        expect(screen.getByText('Available Qty: 1000')).toBeInTheDocument()
        expect(
            screen.getByText('20 piece(s) is the minimum per transaction')
        ).toBeInTheDocument()
        expect(screen.getByText('Desired amount')).toBeInTheDocument()
        expect(
            screen.getByTestId('productAmount-628639c1bcb9946a0c')
        ).toBeInTheDocument()
        expect(screen.getByText('Add to Cart')).toBeInTheDocument()
    })

    it('renders the content when product is NOT available', () => {
        setup({ ...data, availableAmount: 0 })
        expect(
            screen
                .getByTestId('productImage-628639c1bcb9946a0c')
                .getAttribute('src')
        ).toContain(
            'https://media.gettyimages.com/photos/bolts-and-nuts-picture-id175425827?s=2048x2048'
        )
        expect(screen.getByText('Test Product 1')).toBeInTheDocument()
        expect(screen.getByText('Price: 0.20€')).toBeInTheDocument()
        expect(screen.getByText('Out of Stock')).toBeInTheDocument()
        expect(screen.getByText('Desired amount')).toBeInTheDocument()
        expect(
            screen.getByTestId('productAmount-628639c1bcb9946a0c')
        ).toBeInTheDocument()
        expect(
            screen.getByTestId('productAmount-628639c1bcb9946a0c')
        ).toHaveAttribute('disabled')
        expect(
            screen.getByText('Sorry, no more product left')
        ).toBeInTheDocument()
        expect(screen.getByText('Add to Cart')).toBeInTheDocument()
        expect(
            screen.getByTestId('addToCartButton-628639c1bcb9946a0c')
        ).toHaveAttribute('disabled')
    })
})
