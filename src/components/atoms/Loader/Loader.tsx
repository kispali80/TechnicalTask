import React, { FC } from 'react'
import { LoaderProps } from '~types/loader'

/**
 * Loader component which shows a loader animation
 * @param isLoading
 * @constructor
 */
export const Loader: FC<LoaderProps> = ({ isLoading }) => {
    if (!isLoading) {
        return null
    }

    if (isLoading) {
        return (
            <div className="w-20 m-auto">
                <img
                    className="h-20"
                    src="/loading.gif"
                    alt="Loading"
                    title="Loading"
                />
            </div>
        )
    }
}
