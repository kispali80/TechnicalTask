import { ProductType } from '~types/product'
import { CartItemType, CartProductsType } from '~types/cart'

export const formatPrice = (price: number) => {
    return `${price}€`
}

export const formatCartItems = (
    cartItems: CartItemType[],
    products: ProductType[]
) => {
    const productIds = cartItems.map(({ id }) => id)
    const result: CartProductsType[] = []
    products?.map((product) => {
        if (productIds.includes(product?.id)) {
            result.push({
                id: product.id,
                name: product.name,
                img: product.img,
                price: product.price,
                quantity: 1,
            })
        }
    })

    return result
}
