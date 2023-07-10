import React from 'react'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import HomeContent from './HomeContent'
import { renderWithProviders } from '~utils/testing-helper'

describe('renders the Header component', () => {
    const setup = () => {
        return renderWithProviders(<HomeContent />)
    }

    it('renders the content', () => {
        setup()
        expect(screen.getByText('Home page')).toBeInTheDocument()
        expect(screen.getByText('Welcome!')).toBeInTheDocument()
        expect(
            screen.getByText(
                'Please take a look at our fancy products and feel free to free to add any of them to the cart.'
            )
        ).toBeInTheDocument()
        expect(
            screen.getByTestId('homePageProductsIcon').getAttribute('src')
        ).toContain('/product-list.png')
        expect(
            screen.getByText('Click on the icon to check the products')
        ).toBeInTheDocument()
        expect(
            screen.getByTestId('homePageCartIcon').getAttribute('src')
        ).toContain('/shopping-cart.png')
        expect(
            screen.getByText(
                'Click on the icon to check what is already added to the cart'
            )
        ).toBeInTheDocument()
    })
})
