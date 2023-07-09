import React, { FC } from 'react'
import { MessageProps } from '~types/message'
import { SuccessMessageItem, ErrorMessageItem } from '~atoms/MessageItem'
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

    const renderMessageItem = () => {
        switch (type) {
            case MESSAGE_TYPE_SUCCESS:
                return <SuccessMessageItem message={message} />

            case MESSAGE_TYPE_ERROR:
                return <ErrorMessageItem message={message} code={code} />

            default:
                return null
        }
    }

    return (
        <div
            id="popup-modal"
            tabIndex={-1}
            className="fixed top-24 left-0 sm:left-[calc(50%-250px)] right-0 z-50 p-4 overflow-x-hidden overflow-y-hidden w-5/6 sm:w-96 h-18"
        >
            <div className="relative w-full max-w-md max-h-full animation-fadeOut">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {renderMessageItem()}
                </div>
            </div>
        </div>
    )
}
