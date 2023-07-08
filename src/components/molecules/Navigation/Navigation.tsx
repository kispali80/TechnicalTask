import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/products" title="Product list">
                        Products
                    </Link>
                </li>
                <li>
                    <Link to="/cart" title="Shopping Cart">
                        <img
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
