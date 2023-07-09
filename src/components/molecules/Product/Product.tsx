import React, { FC } from 'react'
import { ProductProps } from '~types/product'
import { StockStatus } from '~molecules/StockStatus/StockStatus'
import { Price } from '~atoms/Price/Price'

export const Product: FC<ProductProps> = ({
    id,
    name,
    img,
    price,
    availableAmount,
    onAddProduct,
}) => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-52 relative">
                {img && <img src={img} alt={name} title={name} />}
            </div>
            <form className="flex-auto p:2 md:p-4" method="POST">
                <div className="flex flex-wrap items-baseline">
                    <h5 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
                        {name}
                    </h5>
                </div>
                <Price value={price} />
                <StockStatus amount={availableAmount} />
                <div className="flex space-x-4 mt-4 mb-5 text-sm font-medium">
                    <button
                        className="flex-none w-full h-12 uppercase font-medium tracking-wider bg-slate-900 text-white"
                        onClick={(event) => onAddProduct(event, id)}
                    >
                        Add to Cart
                    </button>
                </div>
            </form>
        </div>
    )
}
