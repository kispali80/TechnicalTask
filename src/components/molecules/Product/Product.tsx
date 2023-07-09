import React, { FC } from 'react'
import { ProductProps } from '~types/product'
import { StockStatus } from '~molecules/StockStatus/StockStatus'
import { Price } from '~atoms/Price/Price'
import { AddToCartButton } from '~atoms/AddToCartButton/AddToCartButton'

export const Product: FC<ProductProps> = ({
    id,
    name,
    img,
    price,
    availableAmount,
    minOrderAmount,
    onAddProduct,
}) => {
    return (
        <div className="flex flex-col shadow-md">
            <div className="w-auto m-auto mb-4 text-center">
                {img && (
                    <img className="h-40" src={img} alt={name} title={name} />
                )}
            </div>
            <form className="flex-auto p:2 md:p-4" method="POST">
                <div className="flex flex-wrap items-baseline text-center xl:text-left">
                    <h4 className="w-full flex-none mb-3 text-2xl leading-none text-slate-500">
                        {name}
                    </h4>
                </div>
                <Price value={price} />
                <StockStatus
                    availableAmount={availableAmount}
                    minOrderAmount={minOrderAmount}
                />
                <div className="flex space-x-4 mt-4 mb-5 text-sm font-medium">
                    <AddToCartButton
                        id={id}
                        availableAmount={availableAmount}
                        onAddProduct={onAddProduct}
                    />
                </div>
            </form>
        </div>
    )
}
