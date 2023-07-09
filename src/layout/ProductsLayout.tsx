import React, { FC } from 'react'
import Header from '~organisms/Header/Header'
import Footer from '~organisms/Footer/Footer'
import { LayoutProps } from '~types/layout'
import { Sidebar } from '~organisms/Sidebar/Sidebar'
import { ConnectedMessages } from '~molecules/Messages'

export const ProductsLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="mx-2">{children}</main>
            <Sidebar />
            <Footer />
            <ConnectedMessages />
        </>
    )
}
