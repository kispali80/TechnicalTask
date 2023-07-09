import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '~app/hooks'
import {
    emptyCart,
    removeItemFromCart,
    updateCartItem,
} from '~app/store/features/handleCart'
import {
    setForceRefresh,
    updateProductAmount,
} from '~app/store/features/handleProducts'
import {
    addErrorMessage,
    addSuccessMessage,
} from '~app/store/features/handleMessages'
import { Cart } from './Cart'
import { formatCartItems } from '~utils/formatter'
import { CartProductsType } from '~types/cart'
import { validateUpdateItem } from '~utils/cart'

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
            const cartItem = storedCartItems?.find((item) => item?.id === id)
            const product = storedProducts?.find(
                (product) => product?.id === id
            )

            if (product && cartItem) {
                dispatch(removeItemFromCart({ id }))
                dispatch(
                    updateProductAmount({
                        id,
                        amount: product.availableAmount + cartItem?.amount,
                    })
                )
            }
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

    const onUpdateItem = (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string,
        amountUpdated: number
    ) => {
        event.preventDefault()
        try {
            const validateResult = validateUpdateItem(
                storedProducts,
                cartItems,
                id,
                amountUpdated
            )
            if (validateResult.isValid) {
                const product = storedProducts?.find(
                    (product) => product?.id === id
                )
                const cartItem = storedCartItems?.find(
                    (item) => item?.id === id
                )
                if (product && cartItem) {
                    const maxAmount = product.availableAmount + cartItem.amount
                    dispatch(updateCartItem({ id, amount: amountUpdated }))
                    dispatch(
                        updateProductAmount({
                            id,
                            amount: maxAmount - amountUpdated,
                        })
                    )
                    dispatch(
                        addSuccessMessage({
                            message: 'Your cart has been updated successfully',
                        })
                    )
                }
            }

            if (!validateResult.isValid && validateResult.error) {
                dispatch(
                    addErrorMessage({
                        message: 'The cart cannot be updated',
                        code: validateResult.error,
                    })
                )
            }
        } catch (e) {
            dispatch(
                addErrorMessage({
                    message:
                        'There has been an error while trying to update your cart',
                })
            )
        }
    }

    const onRemoveAll = () => {
        try {
            dispatch(emptyCart())
            dispatch(setForceRefresh({ refresh: true }))
            dispatch(
                addSuccessMessage({
                    message:
                        'All items have been successfully removed from your cart',
                })
            )
        } catch (e) {
            dispatch(
                addErrorMessage({
                    message:
                        'There has been an error while trying to remove the items from your cart',
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
            onUpdateItem={onUpdateItem}
            onRemoveAll={onRemoveAll}
        />
    )
}
