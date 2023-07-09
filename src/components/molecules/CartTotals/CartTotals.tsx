import React, { FC } from 'react'
import { CartTotalsProps } from '~types/cart'
import { getTotals } from '~utils/cart'
import { formatPrice } from '~utils/formatter'

export const CartTotals: FC<CartTotalsProps> = ({ items }) => {
    const totals = getTotals(items)

    return (
        <div className="border-b-slate-300 border-b-2">
            <h3 className="text-2xl mb-8 text-right">Totals</h3>
            <ul className="flex flex-col mb-6 mr-2 ">
                <li className="w-full my-2 text-right text-xl">
                    Price: {formatPrice(totals.price, 1)}
                </li>
                <li className="w-full my-1 text-right text-md">
                    Qty: {totals.amount}
                </li>
            </ul>
        </div>
    )
}
