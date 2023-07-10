import { ProductType } from '~types/product'
import { CartItemType, CartProductsType } from '~types/cart'

/**
 * Format price
 * @param price
 * @param amount
 */
export const formatPrice = (price: number, amount: number) => {
    const value = price * amount
    const formattedValue = value % 1 == 0 ? value : value.toFixed(2)
    return `${formattedValue}€`
}

/**
 * Format cart items
 * @param cartItems
 * @param products
 */
export const formatCartItems = (
    cartItems: CartItemType[],
    products: ProductType[]
) => {
    const productIds = cartItems.map(({ id }) => id)
    const result: CartProductsType[] = []
    products?.map((product) => {
        if (productIds.includes(product?.id)) {
            const cartItem = cartItems?.find((item) => item?.id == product?.id)
            result.push({
                id: product.id,
                name: product.name,
                img: product.img,
                price: product.price,
                amount: cartItem?.amount || 0,
            })
        }
    })

    return result
}
