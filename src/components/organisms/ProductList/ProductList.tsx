import React, { FC } from 'react'
import { ProductListProps } from '~types/product'
import { Loader } from '~atoms/Loader/Loader'
import { Product } from '~molecules/Product/Product'
import { NoResult } from '~atoms/NoResult/NoResult'
import { Link } from 'react-router-dom'

export const ProductList: FC<ProductListProps> = ({
    products,
    isLoading,
    onAddProduct,
    onForceRefresh,
}) => {
    return (
        <>
            <div className="flex mb-12 items-center justify-center">
                <h1 className="text-3xl text-center">Product list</h1>
                <Link
                    className="flex items-center ml-4"
                    to="#"
                    onClick={onForceRefresh}
                    title="Force refresh products, reset states"
                >
                    <img
                        className="h-6"
                        src="/refresh.png"
                        alt="Force refresh"
                        title="Force refresh products"
                    />
                </Link>
            </div>
            <Loader isLoading={isLoading} />
            {!isLoading && !products?.length && (
                <NoResult message="Sorry, there are no products found" />
            )}
            {!isLoading && products?.length > 0 && (
                <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
                    {products.map((product) => (
                        <li className="md:w-1/2 lg:w-1/3 mb-14">
                            <Product {...product} onAddProduct={onAddProduct} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}
