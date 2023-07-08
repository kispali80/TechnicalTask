import React, { FC } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { LayoutProps } from '../types/layout'
import { Sidebar } from '../components/Sidebar/Sidebar'

export const ProductsLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="mx-2">{children}</main>
            <Sidebar />
            <Footer />
        </>
    )
}
