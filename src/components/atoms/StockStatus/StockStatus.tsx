import React, { FC } from 'react'
import { ProductStockStatus } from '~types/product'

/**
 * Display stock status - available amount and minimum amount to order
 * @param availableAmount
 * @param minOrderAmount
 */
export const StockStatus: FC<ProductStockStatus> = ({
    availableAmount,
    minOrderAmount,
}) => {
    return (
        <div
            data-testid="stockStatus"
            className="text-xs leading-6 font-medium uppercase text-slate-500"
        >
            {!availableAmount && (
                <>
                    <p>Out of Stock</p>
                    <p className="mb-10">Sorry, no more product left</p>
                </>
            )}
            {availableAmount > 0 && (
                <>
                    <p>In Stock</p>
                    {availableAmount > 1 && (
                        <p>Available Qty: {availableAmount}</p>
                    )}
                    {availableAmount === 1 && <p>Only 1 left</p>}
                    <p>
                        {minOrderAmount} piece(s) is the minimum per transaction
                    </p>
                </>
            )}
        </div>
    )
}
