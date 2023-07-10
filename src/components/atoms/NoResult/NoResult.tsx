import React, { FC } from 'react'
import { NoResultProps } from '~types/components'

/**
 * Component for displaying that there is no result
 * @param message
 * @constructor
 */
export const NoResult: FC<NoResultProps> = ({ message }) => {
    return (
        <div data-testid="noResults" className="flex flex-col items-center">
            <img
                className="w-8 mt-32 mb-8"
                src="/sad-face.png"
                alt="Empty result"
                title="Empty result"
            />
            <p className="mb-36 text-2xl text-center">{message}</p>
        </div>
    )
}
