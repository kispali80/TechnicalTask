import React, { FC } from 'react'
import Header from '~organisms/Header/Header'
import Footer from '~organisms/Footer/Footer'
import { LayoutProps } from '~types/layout'
import { ConnectedMessages } from '~molecules/Messages'

export const ProductsLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="max-w-7xl min-h-screen xl:ml-auto xl:mr-auto mx-2 pt-20">
                {children}
            </main>
            <Footer />
            <ConnectedMessages />
        </>
    )
}
