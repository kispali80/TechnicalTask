import React from 'react'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { ProductList } from './ProductList'
import { ProductListProps } from '~types/product'
import { renderWithProviders } from '~utils/testing-helper'
import products from '../../../__mocks__/products.json'

describe('renders the Product List component', () => {
    const onAddProduct = jest.fn()
    const onForceRefresh = jest.fn()

    const data = {
        isLoading: false,
        products,
        onAddProduct,
        onForceRefresh,
    }

    const setup = (args?: ProductListProps) => {
        return renderWithProviders(
            <ProductList
                isLoading={false}
                products={products}
                onAddProduct={onAddProduct}
                onForceRefresh={onForceRefresh}
                {...args}
            />
        )
    }

    it('renders the loading content when the product list being updated', () => {
        setup({ ...data, isLoading: true })
        expect(screen.getByText('Product list')).toBeInTheDocument()
        expect(screen.getByTestId('loading')).toBeInTheDocument()
        expect(
            screen.getByTestId('loadingImage').getAttribute('src')
        ).toContain('/loading.gif')
        expect(screen.queryByText('Add to Cart')).not.toBeInTheDocument()
    })

    it('renders the empty cart', () => {
        setup({ ...data, products: [] })
        expect(screen.getByText('Product list')).toBeInTheDocument()
        expect(
            screen.getByText('Sorry, there are no products found')
        ).toBeInTheDocument()
        expect(screen.queryByText('Add to Cart')).not.toBeInTheDocument()
    })

    it('renders the product list when the are items already added', () => {
        setup()
        expect(screen.getByText('Product list')).toBeInTheDocument()
        expect(screen.getAllByText('In Stock')).toHaveLength(4) // Should match the number of products in the mock
        expect(
            screen.queryByText('Sorry, there are no products found')
        ).not.toBeInTheDocument()
        expect(screen.getByText('Test Product 1')).toBeInTheDocument()
        expect(screen.getByText('Price: 0.20€')).toBeInTheDocument()
        expect(
            screen.getByTestId('productAmount-628639c1bcb9946a0c')
        ).toBeInTheDocument()
    })
})
