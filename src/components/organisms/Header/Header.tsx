import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '~molecules/Navigation/Navigation'

export default function Header() {
    return (
        <header className="header flex">
            <div className="logo">
                <Link to="/">
                    <img src="/logo192.png" alt="Logo" title="Logo" />
                </Link>
            </div>
            <div className="decription">Technical Task</div>
            <Navigation />
        </header>
    )
}
