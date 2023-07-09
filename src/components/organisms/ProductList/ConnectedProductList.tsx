import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '~app/hooks'
import {
    addProducts,
    decreaseProductAmount,
    setForceRefresh,
} from '~app/store/features/handleProducts'
import { addItemToCart, emptyCart } from '~app/store/features/handleCart'
import { fetchProducts } from '~utils/apiClient'
import { ProductList } from './ProductList'
import {
    addErrorMessage,
    addSuccessMessage,
} from '~app/store/features/handleMessages'
import { canAddItem } from '~utils/cart'

export const ConnectedProductList = () => {
    const dispatch = useAppDispatch()
    const storedProducts = useAppSelector((state) => state?.products?.items)
    const storedCartItems = useAppSelector((state) => state?.cart?.items)
    const forceRefresh = useAppSelector(
        (state) => state?.products?.forceRefresh
    )
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getProducts = () => {
        setIsLoading(true)
        fetchProducts()
            .then((result) => {
                setIsLoading(false)
                dispatch(addProducts(result?.data))
            })
            .catch((e) => {
                dispatch(
                    addErrorMessage({
                        message:
                            'There was an error while trying to get the product list',
                        code: 'ERR001',
                    })
                )
            })
    }

    const onForceRefresh = () => {
        dispatch(emptyCart())
        dispatch(setForceRefresh({ refresh: true }))
    }

    const onAddProduct = (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string
    ) => {
        event.preventDefault()
        try {
            // Check if the add to cart is possible
            if (canAddItem(storedProducts, storedCartItems, id)) {
                const product = storedProducts?.find(
                    (product) => product?.id === id
                )
                dispatch(addItemToCart({ id, amount: product?.minOrderAmount }))
                dispatch(
                    decreaseProductAmount({
                        id,
                        amount: product?.minOrderAmount,
                    })
                )
                dispatch(
                    addSuccessMessage({
                        message:
                            'Product has been successfully added to your cart',
                    })
                )
            } else {
                dispatch(
                    addErrorMessage({
                        message:
                            'Sorry, you cannot add more from this product to the cart',
                        code: 'ERR003',
                    })
                )
            }
        } catch (e) {
            dispatch(
                addErrorMessage({
                    message:
                        'There has been an error while trying to add the product to your cart',
                    code: 'ERR002',
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
            getProducts()
        }

        return () => controller.abort()
    }, [storedProducts])

    useEffect(() => {
        if (forceRefresh) {
            getProducts()
            dispatch(setForceRefresh({ forceRefresh: false }))
        }
    }, [forceRefresh])

    return (
        <ProductList
            products={storedProducts}
            isLoading={isLoading}
            onAddProduct={onAddProduct}
            onForceRefresh={onForceRefresh}
        />
    )
}
