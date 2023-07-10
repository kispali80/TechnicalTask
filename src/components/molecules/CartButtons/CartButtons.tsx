import React, { ChangeEvent, FC, useState } from 'react'
import { RemoveFromCartButtonProps } from '~types/components'

/**
 * Component fod displaying the Update and Remove buttons on Cart
 * @param id
 * @param amount
 * @param onRemoveItem
 * @param onUpdateItem
 */
export const CartButtons: FC<RemoveFromCartButtonProps> = ({
    id,
    onRemoveItem,
    onUpdateItem,
}) => {
    const [amountUpdated, setAmountUpdated] = useState<number>(0)

    const onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
        setAmountUpdated(+event.target.value)
    }

    return (
        <>
            <div className="my-4 w-full">
                <label
                    htmlFor="amount"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Desired amount
                </label>
                <div className="flex md:flex-col justify-between">
                    <input
                        data-testid={`updateCartAmount-${id}`}
                        type="number"
                        min="0"
                        id="amount"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 md:w-full h-12 p-2.5 md:mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="amount"
                        required
                        onChange={onChangeAmount}
                    />
                    <button
                        data-testid={`updateCartButton-${id}`}
                        className="w-1/2 md:w-full h-12 mb-4 uppercase font-medium tracking-wider bg-slate-900 text-white hover:bg-slate-700"
                        role="button"
                        onClick={(event) =>
                            onUpdateItem(event, id, amountUpdated)
                        }
                    >
                        Update
                    </button>
                </div>
            </div>
            <button
                data-testid={`removeCartButton-${id}`}
                className="w-full h-12 uppercase font-medium tracking-wider bg-slate-900 text-white hover:bg-slate-700"
                role="button"
                onClick={(event) => onRemoveItem(event, id)}
            >
                Remove
            </button>
        </>
    )
}
