import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '~molecules/Navigation/Navigation'

export default function Header() {
    return (
        <header className="fixed xl:relative w-full bg-white p-2 shadow-md z-10">
            <div className="max-w-7xl xl:ml-auto xl:mr-auto flex justify-between items-center">
                <div className="logo">
                    <Link to="/">
                        <img
                            className="w-8 xl:w-auto xl:h-16"
                            src="/logo192.png"
                            alt="Logo"
                            title="eCommerce Application home page"
                        />
                    </Link>
                </div>
                <p className="sm:ml-40 md:ml-44 text-2xl">eCommerce App</p>
                <Navigation />
            </div>
        </header>
    )
}
