import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { MinicartProps } from '~types/cart'

/**
 * Minicart at the top right edge of the screen to display the number of items in the cart
 * Also navigates to the cart page
 * @param amount
 */
export const Minicart: FC<MinicartProps> = ({ amount }) => {
    return (
        <Link
            data-testid="minicart"
            className="relative flex items-center"
            to="/cart"
            title="Shopping Cart"
        >
            <span className="mr-1 hidden sm:inline">Cart</span>
            <img
                data-testid="navigationItemMinicartImage"
                className="w-8"
                src="/shopping-cart.png"
                alt="Shopping Cart"
                title="Shopping Cart"
            />
            {!!amount && amount > 0 && (
                <div
                    data-testid="minicartAmount"
                    className="absolute w-4 top-0 right-0 z-20 bg-slate-900 text-white rounded-xl text-center text-xs"
                >
                    {amount}
                </div>
            )}
        </Link>
    )
}
