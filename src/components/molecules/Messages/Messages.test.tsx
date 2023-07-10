import React from 'react'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { Messages } from './Messages'
import { MessageProps } from '~types/message'
import { MESSAGE_TYPE_ERROR, MESSAGE_TYPE_SUCCESS } from '~constants/messages'
import { renderWithProviders } from '~utils/testing-helper'

describe('renders the Messages component', () => {
    const data = {
        message: 'Test message',
        autoRemove: false,
    }
    const setup = (props?: MessageProps) => {
        return renderWithProviders(
            <Messages
                type={MESSAGE_TYPE_SUCCESS}
                message="Test message"
                autoRemove={false}
                {...props}
            />
        )
    }

    it('renders the success message', () => {
        setup()
        expect(screen.getByTestId('successMessageItem')).toBeInTheDocument()
        expect(screen.getByText('Test message')).toBeInTheDocument()
        expect(screen.queryByText('Test code')).not.toBeInTheDocument()
    })

    it('renders the error message without the code', () => {
        setup({ ...data, type: MESSAGE_TYPE_ERROR })
        expect(screen.getByTestId('errorMessageItem')).toBeInTheDocument()
        expect(screen.getByText('Test message')).toBeInTheDocument()
        expect(screen.queryByText('Test code')).not.toBeInTheDocument()
    })

    it('renders the error message without the code', () => {
        setup({ ...data, type: MESSAGE_TYPE_ERROR, code: 'Test code' })
        expect(screen.getByTestId('errorMessageItem')).toBeInTheDocument()
        expect(screen.getByText('Test message')).toBeInTheDocument()
        expect(screen.getByText('Test code')).toBeInTheDocument()
    })
})
