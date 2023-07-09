import { ProductType } from '~types/product'
import { CartItemType, CartProductsType } from '~types/cart'

const validateItem = (
    products: ProductType[],
    productId: string,
    amountAdded: number
) => {
    let error = ''

    // No amount specified
    if (!amountAdded) {
        error = 'You have to to specify more than 0 amount'
    }

    const product = products?.find((product) => product?.id === productId)
    if (product) {
        const { availableAmount, minOrderAmount } = product
        if (amountAdded < minOrderAmount) {
            error =
                'The updated amount must be greater or equal than minimum order amount'
        }

        if (amountAdded > availableAmount) {
            error = 'You cannot add more than the available amount'
        }
    }

    return {
        isValid: !error,
        error,
    }
}

export const validateAddItem = (
    products: ProductType[],
    productId: string,
    amountAdded: number
) => {
    return validateItem(products, productId, amountAdded)
}

export const validateUpdateItem = (
    products: ProductType[],
    cartItems: CartItemType[],
    productId: string,
    amountUpdated: number
) => {
    let error = undefined
    const validate = validateItem(products, productId, amountUpdated)
    const product = products?.find((product) => product?.id === productId)
    const cartItem = cartItems?.find((item) => item?.id === productId)
    if (product && cartItem) {
        const { availableAmount } = product
        if (availableAmount + cartItem?.amount <= amountUpdated) {
            error = 'You cannot add more than the available amount'
        }
    }

    return {
        ...validate,
        ...(error && { error }),
    }
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
