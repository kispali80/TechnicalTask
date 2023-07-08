import React, { FC } from 'react'
import Header from '~organisms/Header/Header'
import Footer from '~organisms/Footer/Footer'
import { LayoutProps } from '~types/layout'

export const CartLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
