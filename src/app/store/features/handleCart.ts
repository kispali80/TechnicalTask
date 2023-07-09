import { createSlice } from '@reduxjs/toolkit'
import { CartItemType } from '~types/cart'

interface CartState {
    items: CartItemType[]
}

const initialState: CartState = {
    items: [],
}
export const handleCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            if (
                state?.items?.length === 0 ||
                state?.items?.find((id) => id !== action?.payload?.id)
            ) {
                state.items.push({ id: action.payload.id, quantity: 1 })
            }
        },
        removeItemFromCart: (state, action) => {
            state.items = state.items.filter(
                (product) => action.payload.id !== product.id
            )
        },
        emptyCart: (state) => {
            state.items = []
        },
    },
})

export const { addItemToCart, removeItemFromCart, emptyCart } =
    handleCart.actions

export default handleCart.reducer
