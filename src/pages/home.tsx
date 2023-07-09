import React from 'react'
import { ProductsLayout } from '~layout/ProductsLayout'
import HomeContent from '~organisms/HomeContent/HomeContent'

export const HomePage = () => {
    return (
        <ProductsLayout>
            <HomeContent />
        </ProductsLayout>
    )
}
