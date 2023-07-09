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
            <div className="message--error flex flex-col">
                <p>{message}</p>
                {code && <p>Error code: {code}</p>}
            </div>
        </>
    )
}
