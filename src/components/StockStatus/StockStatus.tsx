import React, { FC } from 'react'
import { ProductStockStatus } from '../../types/product'

export const StockStatus: FC<ProductStockStatus> = ({ amount }) => {
    if (amount == 0) {
        return <>Out of Stock</>
    }

    return (
        <div className="text-xs leading-6 font-medium uppercase text-slate-500">
            <p>In Stock</p>
            <p>Qty: {amount}</p>
        </div>
    )
}
