import { createSlice } from '@reduxjs/toolkit'
import { ProductType } from '~types/product'

interface ProductsState {
    items: ProductType[]
    forceRefresh: boolean
}

const initialState: ProductsState = {
    items: [],
    forceRefresh: false,
}
export const handleProducts = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.items = action.payload
        },
        setForceRefresh: (state, action) => {
            state.forceRefresh = action?.payload?.refresh || false
        },
        decreaseProductAmount: (state, action) => {
            const currentProduct = state?.items?.find(
                (product) => product?.id == action?.payload?.id
            )
            if (currentProduct) {
                const updatedProduct = {
                    ...currentProduct,
                    availableAmount:
                        currentProduct?.availableAmount -
                        action?.payload?.amount,
                }
                const updatedProducts = state?.items?.map((product) => {
                    if (product?.id === action?.payload?.id) {
                        return updatedProduct
                    }
                    return product
                })

                state.items = updatedProducts
            }
        },
        increaseProductAmount: (state, action) => {
            const currentProduct = state?.items?.find(
                (product) => product?.id == action?.payload?.id
            )
            if (currentProduct) {
                const updatedProduct = {
                    ...currentProduct,
                    availableAmount:
                        currentProduct?.availableAmount +
                        action?.payload?.amount,
                }
                const updatedProducts = state?.items?.map((product) => {
                    if (product?.id === action?.payload?.id) {
                        return updatedProduct
                    }
                    return product
                })

                state.items = updatedProducts
            }
        },
    },
})

export const {
    addProducts,
    setForceRefresh,
    decreaseProductAmount,
    increaseProductAmount,
} = handleProducts.actions

export default handleProducts.reducer
