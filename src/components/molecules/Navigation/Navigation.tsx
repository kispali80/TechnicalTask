import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav>
            <ul className="flex items-center">
                <li className="mr-4 md:mr-8">
                    <Link
                        className="flex items-center"
                        to="/products"
                        title="Product list"
                    >
                        <span className="mr-2 hidden sm:inline">Products</span>
                        <img
                            className="w-8"
                            src="/product-list.png"
                            alt="Product list"
                            title="Product list"
                        />
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex items-center"
                        to="/cart"
                        title="Shopping Cart"
                    >
                        <span className="mr-1 hidden sm:inline">Cart</span>
                        <img
                            className="w-8"
                            src="/shopping-cart.png"
                            alt="Shopping Cart"
                            title="Shopping Cart"
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
