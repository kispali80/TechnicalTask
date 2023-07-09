import React, { FC, useEffect } from 'react'
import { MessageProps } from '~types/message'
import { SuccessMessageItem } from '~atoms/MessageItem/SuccessMessageItem'
import { ErrorMessageItem } from '~atoms/MessageItem/ErrorMessageItem'
import { MESSAGE_TYPE_ERROR, MESSAGE_TYPE_SUCCESS } from '~constants/messages'
import { useAppDispatch } from '~app/hooks'
import {
    removeErrorMessage,
    removeSuccessMessage,
} from '~app/store/features/handleMessages'

/**
 * Messages component for displaying messages
 * @param type
 * @param message
 * @param autoRemove
 * @param code
 * @constructor
 */
export const Messages: FC<MessageProps> = ({
    type,
    autoRemove = true,
    message,
    code,
}) => {
    const dispatch = useAppDispatch()

    const removeMessageItem = () => {
        switch (type) {
            case MESSAGE_TYPE_SUCCESS:
                dispatch(removeSuccessMessage())
                break

            case MESSAGE_TYPE_ERROR:
                dispatch(removeErrorMessage())
                break

            default:
                break
        }
    }

    if (autoRemove) {
        setTimeout(removeMessageItem, 3000)
    }

    if (!message) {
        return null
    }

    switch (type) {
        case MESSAGE_TYPE_SUCCESS:
            return <SuccessMessageItem message={message} />

        case MESSAGE_TYPE_ERROR:
            return <ErrorMessageItem message={message} code={code} />

        default:
            return null
    }
}
