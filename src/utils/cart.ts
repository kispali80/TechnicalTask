import { ProductType } from '~types/product'
import { CartItemType, CartProductsType } from '~types/cart'

/**
 * Validate cart item if it can be added to the cart
 * @param products
 * @param productId
 * @param amountAdded
 */
export const validateAddItem = (
    products: ProductType[],
    productId: string,
    amountAdded: number
) => {
    return validateItem(products, productId, amountAdded)
}

/**
 * Validate cart item if it can be updated in the cart
 * @param products
 * @param cartItems
 * @param productId
 * @param amountUpdated
 */
export const validateUpdateItem = (
    products: ProductType[],
    cartItems: CartItemType[],
    productId: string,
    amountUpdated: number
) => {
    let error = undefined
    const validate = validateItem(products, productId, amountUpdated, true)
    const product = products?.find((product) => product?.id === productId)
    const cartItem = cartItems?.find((item) => item?.id === productId)
    if (product && cartItem) {
        const { availableAmount } = product
        if (amountUpdated > availableAmount + cartItem?.amount) {
            error = 'You cannot add more than the available amount'
        }
    }

    if (typeof error === 'undefined') {
        error = validate.error
    }

    return {
        isValid: validate.isValid && !error,
        error,
    }
}

/**
 * Validate cart item for add/update - general validation rules
 * @param products
 * @param productId
 * @param amountAdded
 * @param ignoreAvailableAmountCheck
 */
const validateItem = (
    products: ProductType[],
    productId: string,
    amountAdded: number,
    ignoreAvailableAmountCheck?: boolean
) => {
    let error = ''
    const product = products?.find((product) => product?.id === productId)
    if (product) {
        const { availableAmount, minOrderAmount } = product
        if (amountAdded < minOrderAmount) {
            error =
                'The updated amount must be greater or equal than minimum order amount'
        }

        if (!ignoreAvailableAmountCheck && amountAdded > availableAmount) {
            error = 'You cannot add more than the available amount'
        }
    }

    // No amount specified
    if (!amountAdded) {
        error = 'You have to to specify more than 0 amount'
    }

    return {
        isValid: !error,
        error,
    }
}

/**
 * Get cart totals
 * @param cartItems
 */
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
