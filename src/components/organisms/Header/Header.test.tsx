import React from 'react'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import Header from './Header'
import { renderWithProviders } from '~utils/testing-helper'

describe('renders the Header component', () => {
    const setup = () => {
        return renderWithProviders(<Header />)
    }

    it('renders the content', () => {
        setup()
        expect(
            screen.getByTestId('headerLogoImage').getAttribute('src')
        ).toContain('/logo192.png')
        expect(screen.getByText('eCommerce App')).toBeInTheDocument()
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
