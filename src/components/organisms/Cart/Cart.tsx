import React, { FC } from 'react'
import { CartProps } from '~types/cart'
import { CartItem } from '~organisms/CartItem/CartItem'
import { Loader } from '~atoms/Loader/Loader'

export const Cart: FC<CartProps> = ({ items, isLoading, onRemoveItem }) => {
    if (!items?.length) {
        return <>Cart is empty</>
    }

    return (
        <>
            <h1>Cart items</h1>
            <Loader isLoading={isLoading} />
            {!isLoading && items?.length && (
                <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
                    {items.map((item) => (
                        <li className="md:w-{50%} xl:w-{33.33%}">
                            <CartItem {...item} onRemoveItem={onRemoveItem} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}
