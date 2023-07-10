import React, { FC } from 'react'
import Header from '~organisms/Header/Header'
import Footer from '~organisms/Footer/Footer'
import { LayoutProps } from '~types/layout'
import { ConnectedMessages } from '~molecules/Messages'

/**
 * Layout component for Cart
 * @param children
 */
export const CartLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="max-w-3xl min-h-screen md:ml-auto md:mr-auto mx-2 pt-20">
                {children}
            </main>
            <Footer />
            <ConnectedMessages />
        </>
    )
}
