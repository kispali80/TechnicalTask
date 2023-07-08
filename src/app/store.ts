import { configureStore } from '@reduxjs/toolkit'
import handleProductsReducer from './store/features/handleProducts'
import handleCartReducer from './store/features/handleCart'

export const store = configureStore({
    reducer: {
        products: handleProductsReducer,
        cart: handleCartReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
