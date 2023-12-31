import React from 'react'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '~utils/testing-helper'
import { Minicart } from './Minicart'
import { MinicartProps } from '~types/cart'

describe('renders the Minicart component', () => {
    const setup = (props?: MinicartProps) => {
        return renderWithProviders(<Minicart amount={10} {...props} />)
    }

    it('renders the content', () => {
        setup()
        expect(
            screen
                .getByTestId('navigationItemMinicartImage')
                .getAttribute('src')
        ).toContain('/shopping-cart.png')
        expect(screen.getByText('Cart')).toBeInTheDocument()
    })

    it('renders the content of the minicart when there is amount ', () => {
        setup()
        expect(screen.getByTestId('minicart')).toBeInTheDocument()
        expect(screen.getByTestId('minicartAmount')).toBeInTheDocument()
        expect(screen.getByText('Cart')).toBeInTheDocument()
        expect(screen.getByText('10')).toBeInTheDocument()
    })

    it('renders the content of the minicart when there is NO amount ', () => {
        setup({ amount: 0 })
        expect(screen.getByTestId('minicart')).toBeInTheDocument()
        expect(screen.getByText('Cart')).toBeInTheDocument()
        expect(screen.queryByText('10')).not.toBeInTheDocument()
    })
})
