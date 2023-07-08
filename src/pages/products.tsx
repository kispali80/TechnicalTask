import React from 'react'
import { ProductsLayout } from '../layout/ProductsLayout'
import { ConnectedProductList } from '../components/ProductList/ConnectedProductList'

export const ProductsPage = () => {
    return (
        <ProductsLayout>
            <ConnectedProductList />
        </ProductsLayout>
    )
}
