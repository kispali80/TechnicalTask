import React, { FC } from 'react'
import { SuccessMessageItemProps } from '~types/message'

/**
 * Message Item component for showing success messages
 * @param message
 * @constructor
 */
export const SuccessMessageItem: FC<SuccessMessageItemProps> = ({
    message,
}) => {
    return (
        <>
            <div
                className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                role="alert"
            >
                <div className="flex">
                    <p className="font-bold">{message}</p>
                </div>
            </div>
        </>
    )
}
