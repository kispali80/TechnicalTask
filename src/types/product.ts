import React from 'react'

export type ProductListProps = {
    products: ProductType[]
    isLoading: boolean
    onAddProduct: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string
    ) => void
}

export type ProductProps = ProductType & {
    onAddProduct: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string
    ) => void
}

export interface ProductStockStatus {
    amount: number
}

export type ProductType = {
    id: string
    name: string
    img: string
    availableAmount: number
    minOrderAmount: number
    price: number
}
