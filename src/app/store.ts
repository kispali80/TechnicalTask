import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import handleProductsReducer from './store/features/handleProducts'
import handleCartReducer from './store/features/handleCart'
import handleMessagesReducer from './store/features/handleMessages'

const persistProductsConfig = {
    key: 'product',
    storage,
}

const persistCartConfig = {
    key: 'cart',
    storage,
}

const persistedProductsReducer = persistReducer(
    persistProductsConfig,
    handleProductsReducer
)
const persistedCartReducer = persistReducer(
    persistCartConfig,
    handleCartReducer
)

export const store = configureStore({
    reducer: {
        products: persistedProductsReducer,
        cart: persistedCartReducer,
        messages: handleMessagesReducer,
    },
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
