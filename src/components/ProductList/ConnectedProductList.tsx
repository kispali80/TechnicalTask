import React, { useEffect, useState } from 'react'
import { fetchData } from '../../utils/apiClient'
import { ProductList } from './ProductList'
import { ProductType } from '../../types/product'

export const ConnectedProductList = () => {
    const [products, setProducts] = useState<ProductType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onAddProduct = (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string
    ) => {
        event.preventDefault()
        console.log('add to product', id)
    }

    useEffect(() => {
        setIsLoading(true)
        fetchData().then((result) => {
            setIsLoading(false)
            setProducts(result?.data)
        })
    }, [])

    return (
        <ProductList
            products={products}
            isLoading={isLoading}
            onAddProduct={onAddProduct}
        />
    )
}
