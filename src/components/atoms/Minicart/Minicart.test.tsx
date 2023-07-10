import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Minicart } from './Minicart'
import { MinicartProps } from '~types/cart'

describe('renders the Minicart component', () => {
    const setup = (props?: MinicartProps) => {
        return render(
            <BrowserRouter>
                <Minicart amount={10} {...props} />
            </BrowserRouter>
        )
    }

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
