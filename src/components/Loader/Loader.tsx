import React, { FC } from 'react'
import { LoaderProps } from '../../types/loader'

export const Loader: FC<LoaderProps> = ({ isLoading }) => {
    if (!isLoading) {
        return null
    }

    if (isLoading) {
        return (
            <>
                <img src="/loading.gif" alt="Loading" title="Loading" />
            </>
        )
    }
}
