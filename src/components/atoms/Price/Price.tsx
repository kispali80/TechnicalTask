import React, { FC } from 'react'
import { ProductPriceProps } from '~types/product'
import { formatPrice } from '~utils/formatter'

/**
 * Price component which shows the formatted price with currency
 * @param value
 * @param number
 * @constructor
 */
export const Price: FC<ProductPriceProps> = ({ value, amount }) => {
    return (
        <div className="text-lg font-medium">
            Price: {formatPrice(value, amount || 1)}
        </div>
    )
}
