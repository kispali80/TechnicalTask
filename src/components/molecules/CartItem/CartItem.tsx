import React, { FC } from 'react'
import { CartItemProps } from '~types/cart'
import { Price } from '~atoms/Price/Price'

export const CartItem: FC<CartItemProps> = ({
    id,
    name,
    img,
    price,
    quantity,
    onRemoveItem,
}) => {
    return (
        <div className="flex flex-col sm:flex-row sm:h-48 sm:border-b-slate-300 sm:border-b-2 shadow-md sm:shadow-none">
            <div className="w-auto m-auto mb-4 text-center sm:w-1/2 sm:h-5/6">
                {img && (
                    <img
                        className="h-40 sm:h-full"
                        src={img}
                        alt={name}
                        title={name}
                    />
                )}
            </div>
            <form
                className="md:flex md:justify-between w-full sm:w-1/2 flex-auto p:2 md:p-4"
                method="POST"
            >
                <div className="md:flex md:flex-col md:w-1/2">
                    <div className="flex flex-wrap items-baseline">
                        <h5 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
                            {name}
                        </h5>
                    </div>
                    <Price value={price} />
                    <p>Qty: {quantity}</p>
                </div>
                <div className="flex md:w-1/2 md:items-center sm:max-w-xs space-x-4 mt-4 mb-4 text-sm font-medium">
                    <button
                        className="flex-none w-full h-12 uppercase font-medium tracking-wider bg-slate-900 text-white"
                        onClick={(event) => onRemoveItem(event, id)}
                    >
                        Remove
                    </button>
                </div>
            </form>
        </div>
    )
}
