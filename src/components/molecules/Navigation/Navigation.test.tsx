import React from 'react'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '~utils/testing-helper'
import Navigation from './Navigation'

describe('renders the Navigation component', () => {
    const setup = () => {
        return renderWithProviders(<Navigation />)
    }

    it('renders the content', () => {
        setup()
        expect(
            screen
                .getByTestId('navigationItemProductsImage')
                .getAttribute('src')
        ).toContain('/product-list.png')
        expect(screen.getByText('Products')).toBeInTheDocument()
        expect(
            screen
                .getByTestId('navigationItemMinicartImage')
                .getAttribute('src')
        ).toContain('/shopping-cart.png')
        expect(screen.getByText('Cart')).toBeInTheDocument()
    })
})
