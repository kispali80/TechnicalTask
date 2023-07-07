import React, { FC } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { LayoutProps } from '../types/layout'

export const CartLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
