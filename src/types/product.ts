import React from 'react'

export type ProductListProps = {
    products: ProductType[]
    isLoading: boolean
    isAddProductLoading: boolean | string
    onAddProduct: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string,
        amountAdded: number
    ) => void
    onForceRefresh: () => void
}

export type ProductProps = ProductType & {
    isLoading: boolean | string
    onAddProduct: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string,
        amountAdded: number
    ) => void
}

export interface ProductStockStatus {
    availableAmount: number
    minOrderAmount: number
}

export interface ProductPriceProps {
    value: number
    amount?: number
}

export type ProductType = {
    id: string
    name: string
    img: string
    availableAmount: number
    minOrderAmount: number
    price: number
}
