import React from 'react'

export interface AddToCartButtonProps {
    id: string
    availableAmount: number
    onAddProduct: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string
    ) => void
}

export interface NoResultProps {
    message: string
}
