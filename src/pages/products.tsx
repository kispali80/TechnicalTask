import React from 'react'
import { ProductsLayout } from '~layout/ProductsLayout'
import { ConnectedProductList } from '~organisms/ProductList'

export const ProductsPage = () => {
    return (
        <ProductsLayout>
            <ConnectedProductList />
        </ProductsLayout>
    )
}
