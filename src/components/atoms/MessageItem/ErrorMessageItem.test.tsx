import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ErrorMessageItem } from './ErrorMessageItem'
import { ErrorMessageItemProps } from '~types/message'

describe('renders the Error Message Item component', () => {
    const setup = (props?: ErrorMessageItemProps) => {
        return render(
            <ErrorMessageItem message="Test error message" {...props} />
        )
    }

    it('renders the error message without the code', () => {
        setup()
        expect(screen.getByTestId('errorMessageItem')).toBeInTheDocument()
        expect(screen.getByText('Test error message')).toBeInTheDocument()
        expect(screen.queryByText('Test code')).not.toBeInTheDocument()
    })

    it('renders the error message without the code', () => {
        setup({ code: 'Test code' })
        expect(screen.getByTestId('errorMessageItem')).toBeInTheDocument()
        expect(screen.getByText('Test error message')).toBeInTheDocument()
        expect(screen.getByText('Test code')).toBeInTheDocument()
    })
})
