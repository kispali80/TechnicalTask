import React from 'react'

export type CartProps = {
    items: CartProductsType[]
    isLoading: boolean
    onRemoveItem: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string
    ) => void
    onRemoveAll: () => void
}

export type CartItemProps = CartProductsType & {
    onRemoveItem: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string
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
