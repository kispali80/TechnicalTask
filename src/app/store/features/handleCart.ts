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
            if (!state?.items?.length) {
                state.items.push({
                    id: action.payload.id,
                    amount: action?.payload?.amount,
                })
            } else {
                const currentItem = state?.items?.find(
                    (item) => item?.id == action?.payload?.id
                )
                if (currentItem) {
                    const updatedItem = {
                        ...currentItem,
                        amount: currentItem?.amount + action?.payload?.amount,
                    }
                    const updatedItems = state?.items?.map((item) => {
                        if (item?.id === action?.payload?.id) {
                            return updatedItem
                        }
                        return item
                    })

                    state.items = updatedItems
                } else {
                    state.items.push({
                        id: action.payload.id,
                        amount: action?.payload?.amount,
                    })
                }
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
