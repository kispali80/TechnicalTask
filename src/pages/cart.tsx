import React from 'react'
import { CartLayout } from '~layout/CartLayout'
import { ConnectedCart } from '~organisms/Cart'

export const CartPage = () => {
    return (
        <CartLayout>
            <ConnectedCart />
        </CartLayout>
    )
}
