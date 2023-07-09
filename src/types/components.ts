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
}

export interface RemoveFromCartButtonProps {
    id: string
    amount: number
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
