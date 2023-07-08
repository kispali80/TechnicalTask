import { createSlice } from '@reduxjs/toolkit'
import { CartItemType } from '../../../types/cart'

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
            console.log(action.payload)
            state.items.push({ id: action.payload.id, quantity: 1 })
        },
        removeItemFromCart: (state, action) => {
            state.items = state.items.filter(
                (productId) => action.payload.id !== productId
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
