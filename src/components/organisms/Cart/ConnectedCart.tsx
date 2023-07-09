import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '~app/hooks'
import { removeItemFromCart } from '~app/store/features/handleCart'
import {
    addErrorMessage,
    addSuccessMessage,
} from '~app/store/features/handleMessages'
import { Cart } from './Cart'
import { formatCartItems } from '~utils/formatter'
import { CartProductsType } from '~types/cart'

/**
 * Cart component for handling stored items and related products logic
 * @constructor
 */
export const ConnectedCart = () => {
    const dispatch = useAppDispatch()
    const storedCartItems = useAppSelector((state) => state?.cart?.items)
    const storedProducts = useAppSelector((state) => state?.products?.items)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [cartItems, setCartItems] = useState<CartProductsType[]>([])

    const onRemoveItem = (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string
    ) => {
        event.preventDefault()
        try {
            dispatch(removeItemFromCart({ id }))
            dispatch(
                addSuccessMessage({
                    message:
                        'Product has been successfully removed from your cart',
                })
            )
        } catch (e) {
            dispatch(
                addErrorMessage({
                    message:
                        'There has been an error while trying to remove the product from your cart',
                })
            )
        }
    }

    useEffect(() => {
        setIsLoading(true)
        if (storedCartItems) {
            const cartFormattedItems = formatCartItems(
                storedCartItems,
                storedProducts
            )
            setCartItems(cartFormattedItems)
            setIsLoading(false)
        }
    }, [storedCartItems])

    return (
        <Cart
            items={cartItems}
            isLoading={isLoading}
            onRemoveItem={onRemoveItem}
        />
    )
}
