import React, { FC } from 'react'
import { CartProps } from '~types/cart'
import { CartItem } from '~molecules/CartItem/CartItem'
import { CartTotals } from '~molecules/CartTotals/CartTotals'
import { Loader } from '~atoms/Loader/Loader'
import { NoResult } from '~atoms/NoResult/NoResult'

export const Cart: FC<CartProps> = ({
    items,
    isLoading,
    onRemoveItem,
    onUpdateItem,
    onRemoveAll,
}) => {
    return (
        <>
            <h1 className="mb-12 text-3xl text-center">Cart items</h1>
            <Loader isLoading={isLoading} />
            {!items?.length && <NoResult message="Your cart is empty" />}
            {!isLoading && items?.length > 0 && (
                <>
                    <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
                        {items.map((item) => (
                            <li className="w-full mb-14">
                                <CartItem
                                    {...item}
                                    onRemoveItem={onRemoveItem}
                                    onUpdateItem={onUpdateItem}
                                />
                            </li>
                        ))}
                    </ul>
                    <CartTotals items={items} />
                    {onRemoveAll && (
                        <div className="flex md:w-1/2 md:items-center sm:max-w-xs space-x-4 mt-4 mb-4 text-sm font-medium">
                            <button
                                className="flex-none w-full h-12 uppercase font-medium tracking-wider bg-slate-900 text-white hover:bg-slate-700"
                                onClick={onRemoveAll}
                            >
                                Remove All
                            </button>
                        </div>
                    )}
                </>
            )}
        </>
    )
}
