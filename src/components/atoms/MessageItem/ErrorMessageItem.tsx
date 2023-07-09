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
                className="bg-red-100 border-t-4 border-red-600 rounded-b text-teal-600 px-4 py-3 shadow-md"
                role="alert"
            >
                <div className="flex">
                    <p className="font-bold">{message}</p>
                    {code && <p className="text-sm">Error code: {code}</p>}
                </div>
            </div>
        </>
    )
}
