import React from 'react'
import { useAppSelector } from '~app/hooks'
import { Messages } from '~molecules/Messages/Messages'
import { MESSAGE_TYPE_ERROR, MESSAGE_TYPE_SUCCESS } from '~constants/messages'

/**
 * Messages component for handling states and store related logic
 * There is no test attached to this component as this only passes down the stored values to the Messages component
 */
export const ConnectedMessages = () => {
    const storedSuccessMessage = useAppSelector(
        (state) => state?.messages?.success
    )
    const storedErrorMessage = useAppSelector((state) => state?.messages?.error)

    if (storedSuccessMessage) {
        return (
            <Messages
                type={MESSAGE_TYPE_SUCCESS}
                autoRemove
                message={storedSuccessMessage?.message}
            />
        )
    }

    if (storedErrorMessage) {
        return (
            <Messages
                type={MESSAGE_TYPE_ERROR}
                autoRemove
                message={storedErrorMessage?.message}
                code={storedErrorMessage?.code}
            />
        )
    }

    return null
}
