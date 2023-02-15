import React from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'

export const Layout = ({children}) => {
    return (
        <div className='bg-gray-800 h-screen'>
            <Header />
                {children}
            <Footer />
        </div>
    )
}
