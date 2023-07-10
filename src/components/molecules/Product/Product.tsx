import React, { ChangeEvent, FC, useState } from 'react'
import { ProductProps } from '~types/product'
import { StockStatus } from '~atoms/StockStatus/StockStatus'
import { Price } from '~atoms/Price/Price'
import { AddToCartButton } from '~atoms/AddToCartButton/AddToCartButton'

/**
 * Product component for displaying product attributes
 * @param id
 * @param name
 * @param img
 * @param price
 * @param availableAmount
 * @param minOrderAmount
 * @param onAddProduct
 * @param isLoading
 */
export const Product: FC<ProductProps> = ({
    id,
    name,
    img,
    price,
    availableAmount,
    minOrderAmount,
    onAddProduct,
    isLoading,
}) => {
    const [amountAdded, setAmountAdded] = useState<number>(0)

    const onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
        setAmountAdded(+event.target.value)
    }

    return (
        <div className="flex flex-col my-4 mx-2 shadow-md">
            <div className="w-auto m-auto mb-4 text-center">
                {img && (
                    <img
                        data-testid={`productImage-${id}`}
                        className="h-40"
                        src={img}
                        alt={name}
                        title={name}
                    />
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
                <div className="mt-4">
                    <label
                        htmlFor="amount"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Desired amount
                    </label>
                    <input
                        data-testid={`productAmount-${id}`}
                        type="number"
                        min={minOrderAmount}
                        max={availableAmount}
                        id="amount"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="amount"
                        required
                        disabled={availableAmount === 0}
                        onChange={onChangeAmount}
                    />
                </div>
                <div className="flex space-x-4 mt-4 mb-5 text-sm font-medium">
                    <AddToCartButton
                        id={id}
                        availableAmount={availableAmount}
                        onAddProduct={onAddProduct}
                        amountAdded={amountAdded}
                        isLoading={isLoading}
                    />
                </div>
            </form>
        </div>
    )
}
