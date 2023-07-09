import { createSlice } from '@reduxjs/toolkit'
import { ProductType } from '~types/product'

interface ProductsState {
    items: ProductType[]
}

const initialState: ProductsState = {
    items: [],
}
export const handleProducts = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.items.push(action.payload)
        },
        addProducts: (state, action) => {
            state.items = action.payload
        },
    },
})

export const { addProduct, addProducts } = handleProducts.actions

export default handleProducts.reducer
