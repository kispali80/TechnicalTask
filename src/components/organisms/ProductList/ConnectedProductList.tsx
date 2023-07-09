import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '~app/hooks'
import { addProducts } from '~app/store/features/handleProducts'
import { addItemToCart } from '~app/store/features/handleCart'
import { fetchProducts } from '~utils/apiClient'
import { ProductList } from './ProductList'
import {
    addErrorMessage,
    addSuccessMessage,
} from '~app/store/features/handleMessages'

export const ConnectedProductList = () => {
    const dispatch = useAppDispatch()
    const storedProducts = useAppSelector((state) => state?.products?.items)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    /**
     * @TODO Add logic for amount check
     * @param event
     * @param id
     */
    const onAddProduct = (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string
    ) => {
        event.preventDefault()
        try {
            dispatch(addItemToCart({ id }))
            dispatch(
                addSuccessMessage({
                    message: 'Product has been successfully added to your cart',
                })
            )
        } catch (e) {
            dispatch(
                addErrorMessage({
                    message:
                        'There has been an error while trying to add the product to your cart',
                })
            )
        }
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
