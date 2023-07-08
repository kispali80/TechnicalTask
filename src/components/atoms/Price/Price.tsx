import React, { FC } from 'react'
import { ProductPriceProps } from '~types/product'
import { formatPrice } from '~utils/formatter'

export const Price: FC<ProductPriceProps> = ({ value }) => {
    return (
        <div className="flex-auto text-lg font-medium text-slate-500">
            {formatPrice(value)}
        </div>
    )
}
