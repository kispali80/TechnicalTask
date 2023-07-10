import React, { FC } from 'react'
import classNames from 'classnames'
import { AddToCartButtonProps } from '~types/components'

/**
 * Add to Cart button component for Product
 * @param id
 * @param availableAmount
 * @param onAddProduct
 * @param amountAdded
 */
export const AddToCartButton: FC<AddToCartButtonProps> = ({
    id,
    availableAmount,
    onAddProduct,
    amountAdded,
}) => {
    return (
        <button
            data-testid={`addToCartButton-${id}`}
            disabled={availableAmount == 0}
            className={classNames(
                'flex-none w-full h-12 uppercase font-medium tracking-wider text-white',
                {
                    'bg-slate-300 hover:bg-slate-300': availableAmount == 0,
                    'bg-slate-900 text-white hover:bg-slate-700':
                        availableAmount > 0,
                }
            )}
            role="button"
            onClick={(event) => onAddProduct(event, id, amountAdded)}
        >
            Add to Cart
        </button>
    )
}
