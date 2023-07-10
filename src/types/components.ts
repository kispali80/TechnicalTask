import React from 'react'

export interface AddToCartButtonProps {
    id: string
    availableAmount: number
    amountAdded: number
    onAddProduct: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string,
        amountAdded: number
    ) => void
    isLoading: boolean | string
}

export interface RemoveFromCartButtonProps {
    id: string
    onRemoveItem: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string
    ) => void
    onUpdateItem: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string,
        amountUpdated: number
    ) => void
}

export interface NoResultProps {
    message: string
}
