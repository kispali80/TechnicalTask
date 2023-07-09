import React, { FC } from 'react'
import { ErrorMessageItemProps } from '~types/message'

/**
 * Message Item component for showing errors
 * @param message
 * @param code
 * @constructor
 */
export const ErrorMessageItem: FC<ErrorMessageItemProps> = ({
    message,
    code,
}) => {
    return (
        <>
            <div
                className="bg-red-100 border-t-4 border-red-600 rounded-b text-red-900 px-4 py-3 shadow-md"
                role="alert"
            >
                <div className="flex flex-col">
                    <p className="font-bold mb-2">{message}</p>
                    {code && <p className="text-sm">{code}</p>}
                </div>
            </div>
        </>
    )
}
