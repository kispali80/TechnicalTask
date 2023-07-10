import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Home page content component
 */
export default function HomeContent() {
    return (
        <>
            <h1 className="text-3xl text-center">Home page</h1>
            <div className="text-center">
                <p className="my-6 md:my-14">Welcome!</p>
                <p>
                    Please take a look at our fancy products and feel free to
                    free to add any of them to the cart.
                </p>
                <ul className="flex flex-col sm:flex-row justify-center mt-24">
                    <li className="flex flex-col items-center sm:w-1/2 sm:mx-4 mb-12">
                        <Link
                            className="flex items-center"
                            to="/products"
                            title="Product list"
                        >
                            <img
                                data-testid="homePageProductsIcon"
                                className="w-24"
                                src="/product-list.png"
                                alt="Product list"
                                title="Product list"
                            />
                        </Link>
                        <p className="mt-4 text-center">
                            Click on the icon to check the products
                        </p>
                    </li>
                    <li className="flex flex-col items-center sm:w-1/2 sm:mx-4">
                        <Link
                            className="flex items-center"
                            to="/products"
                            title="Product list"
                        >
                            <img
                                data-testid="homePageCartIcon"
                                className="w-24"
                                src="/shopping-cart.png"
                                alt="Shopping Cart"
                                title="Shopping Cart"
                            />
                        </Link>
                        <p className="mt-4 text-center">
                            Click on the icon to check what is already added to
                            the cart
                        </p>
                    </li>
                </ul>
            </div>
        </>
    )
}
