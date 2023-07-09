import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '~app/hooks'
import { Minicart } from '~atoms/Minicart/Minicart'

export default function Navigation() {
    const storedCartItems = useAppSelector((state) => state?.cart?.items)

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
                    <Minicart amount={storedCartItems?.length} />
                </li>
            </ul>
        </nav>
    )
}
