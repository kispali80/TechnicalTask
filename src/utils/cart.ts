import { ProductType } from '~types/product'
import { CartItemType, CartProductsType } from '~types/cart'

export const canAddItem = (
    products: ProductType[],
    cartItems: CartItemType[],
    productId: string
): boolean => {
    // First check if the item is already in the cart
    const cartItem = cartItems?.find((item) => item?.id === productId)
    if (!cartItem) {
        return true
    }

    if (cartItem) {
        const product = products?.find((product) => product?.id === productId)
        if (product) {
            const { availableAmount, minOrderAmount } = product
            // The availableAmount must be greater than minOrderAmount
            if (availableAmount >= minOrderAmount) {
                return true
            }
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
