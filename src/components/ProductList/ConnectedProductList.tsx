import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addProducts } from '../../app/store/features/handleProducts'
import { addItemToCart } from '../../app/store/features/handleCart'
import { fetchProducts } from '../../utils/apiClient'
import { ProductList } from './ProductList'

export const ConnectedProductList = () => {
    const dispatch = useAppDispatch()
    const storedProducts = useAppSelector((state) => state?.products?.items)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onAddProduct = (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string
    ) => {
        event.preventDefault()
        dispatch(addItemToCart({ id }))
    }

    /**
     * @TODO Fix duplicated api call
     */
    useEffect(() => {
        const controller = new AbortController()
        if (!storedProducts?.length && !isLoading) {
            setIsLoading(true)
            fetchProducts()
                .then((result) => {
                    setIsLoading(false)
                    dispatch(addProducts(result?.data))
                })
                .catch((e) => console.log(e))
        }

        return () => controller.abort()
    }, [storedProducts])

    return (
        <ProductList
            products={storedProducts}
            isLoading={isLoading}
            onAddProduct={onAddProduct}
        />
    )
}
