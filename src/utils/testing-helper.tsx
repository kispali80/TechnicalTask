import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import type { AppStore, RootState } from '~app/store'
import handleProductsReducer from '~app/store/features/handleProducts'
import handleCartReducer from '~app/store/features/handleCart'
import handleMessagesReducer from '~app/store/features/handleMessages'
import { BrowserRouter } from 'react-router-dom'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<RootState>
    store?: AppStore
}

export const renderWithProviders = (
    ui: React.ReactElement,
    {
        preloadedState = {},
        store = configureStore({
            reducer: {
                products: handleProductsReducer,
                cart: handleCartReducer,
                messages: handleMessagesReducer,
            },
            preloadedState,
        }),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) => {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
        return (
            <BrowserRouter>
                <Provider store={store}>{children}</Provider>
            </BrowserRouter>
        )
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
