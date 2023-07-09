import React, { FC } from 'react'
import { CartProps } from '~types/cart'
import { CartItem } from '~molecules/CartItem/CartItem'
import { Loader } from '~atoms/Loader/Loader'

export const Cart: FC<CartProps> = ({ items, isLoading, onRemoveItem }) => {
    if (!items?.length) {
        return <>Cart is empty</>
    }

    return (
        <>
            <h1 className="mb-12 text-3xl text-center">Cart items</h1>
            <Loader isLoading={isLoading} />
            {!isLoading && items?.length && (
                <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
                    {items.map((item) => (
                        <li className="w-full mb-14">
                            <CartItem {...item} onRemoveItem={onRemoveItem} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}
