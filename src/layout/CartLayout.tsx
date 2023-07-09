import React, { FC } from 'react'
import Header from '~organisms/Header/Header'
import Footer from '~organisms/Footer/Footer'
import { LayoutProps } from '~types/layout'
import { ConnectedMessages } from '~molecules/Messages'

export const CartLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <ConnectedMessages />
        </>
    )
}
