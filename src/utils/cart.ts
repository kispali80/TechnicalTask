import { ProductType } from '~types/product'
import { CartItemType, CartProductsType } from '~types/cart'

export const canAddItem = (
    products: ProductType[],
    productId: string,
    amountAdded: number
): boolean => {
    // No amount specified
    if (!amountAdded) {
        return false
    }

    const product = products?.find((product) => product?.id === productId)
    if (product) {
        const { availableAmount, minOrderAmount } = product
        if (
            availableAmount >= minOrderAmount &&
            amountAdded >= minOrderAmount &&
            amountAdded <= availableAmount
        ) {
            return true
        }
    }

    return false
}

export const canUpdateItem = (
    products: ProductType[],
    cartItems: CartItemType[],
    productId: string,
    amountUpdated: number
) => {
    // No amount specified
    if (!amountUpdated) {
        return false
    }

    const product = products?.find((product) => product?.id === productId)
    const cartItem = cartItems?.find((item) => item?.id === productId)
    if (product && cartItem) {
        const { availableAmount, minOrderAmount } = product
        if (
            availableAmount + cartItem?.amount >= amountUpdated &&
            amountUpdated >= minOrderAmount
        ) {
            return true
        }
    }

    return false
}

export const getTotals = (cartItems: CartProductsType[]) => {
    let price = 0
    let amount = 0
    cartItems.map((item) => {
        amount += item?.amount
        price += item?.amount * item?.price
    })

    return {
        price,
        amount,
    }
}
