import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Loader } from './Loader'

describe('renders the Loader component', () => {
    const setup = () => {
        return render(<Loader isLoading />)
    }

    it('renders when isLoading is true', () => {
        setup()
        expect(screen.getByTestId('loading')).toBeInTheDocument()
        expect(
            screen.getByTestId('loadingImage').getAttribute('src')
        ).toContain('/loading.gif')
    })
})
