import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '~app/hooks'
import { removeItemFromCart } from '~app/store/features/handleCart'
import { Cart } from './Cart'
import { formatCartItems } from '~utils/formatter'
import { CartProductsType } from '~types/cart'

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
        dispatch(removeItemFromCart({ id }))
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
