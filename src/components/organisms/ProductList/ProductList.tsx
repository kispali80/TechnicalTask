import React, { FC } from 'react'
import { ProductListProps } from '~types/product'
import { Loader } from '~atoms/Loader/Loader'
import { Product } from '../Product/Product'

export const ProductList: FC<ProductListProps> = ({
    products,
    isLoading,
    onAddProduct,
}) => {
    if (!products?.length) {
        return <>No products found</>
    }

    return (
        <>
            <h1>Product list</h1>
            <Loader isLoading={isLoading} />
            {!isLoading && products?.length && (
                <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
                    {products.map((product) => (
                        <li className="md:w-{50%} xl:w-{33.33%}">
                            <Product {...product} onAddProduct={onAddProduct} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}
