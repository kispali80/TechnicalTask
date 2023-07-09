import React from 'react'

export type CartProps = {
    items: CartProductsType[]
    isLoading: boolean
    onRemoveItem: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string
    ) => void
    onUpdateItem: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string,
        amountUpdated: number
    ) => void
    onRemoveAll: () => void
}

export type CartItemProps = CartProductsType & {
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

export interface MinicartProps {
    amount?: number
}

export interface CartTotalsProps {
    items: CartProductsType[]
}

export type CartItemType = {
    id: string
    amount: number
}

export type CartProductsType = CartItemType & {
    name: string
    img: string
    price: number
}
