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
            <div className="message--success flex">{message}</div>
        </>
    )
}
